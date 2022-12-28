
FROM node:19-alpine3.15 as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --force --silent --production
RUN npm i react-scripts -g --silent
RUN npm i --force @types/styled-components 

COPY . /usr/src/app/

RUN npm run build 

RUN mkdir -p ./usr/src/app/dist/assets/images && mkdir -p ./usr/src/app/dist/assets/fonts
COPY ./assets/images /usr/src/app/dist/assets/images
COPY ./assets/fonts /usr/src/app/dist/assets/fonts

FROM nginx:latest
COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 3000 80
CMD ["nginx", "-g", "daemon off;"]












