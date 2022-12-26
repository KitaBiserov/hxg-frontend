import * as React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "200px",
  borderRadius: "0px",
  color: theme.palette.text.secondary,
}));

const TestNews = [
  {
    id: 1,
    title: "Test News",
    image:
      "./assets/img/testjpeg.jpg",
    textSmall:
      "Lorem ipsum dolor sit amet, consect unde omnis nost tempor incididunt ut labore et dolore magna aliqu",
    link: '/news?id='
    },
  {
    id: 2,
    title: "Test News",
    image:
      "https://images.pexels.com/photos/5429056/pexels-photo-5429056.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
    textSmall:
      "Lorem ipsum dolor sit amet, consect unde omnis nost tempor incididunt ut labore et dolore magna aliqu",
      link: '/news?id='
  
    },
  {
    id: 3,
    title: "Test News Last",
    image:
      "https://images.pexels.com/photos/5429056/pexels-photo-5429056.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
    textSmall:
      "Lorem ipsum dolor sit amet, consect unde omnis nost tempor incididunt ut labore et dolore magna aliqu",
      link: '/news?id='
    },
  {
    id: 4,
    title: "Test News Last 4",
    image:
      "https://images.pexels.com/photos/5429056/pexels-photo-5429056.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
    textSmall:
      "Lorem ipsum dolor sit amet, consect unde omnis nost tempor incididunt ut labore et dolore magna aliqu",
      link: '/news?id='
  
    },
];








export default function FullWidthGrid() {
 {/* const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false)
React.useEffect(() => {
  
  fetch(
    "https://62c3fa7eabea8c085a67f486.mockapi.io/press-center"
  )
    
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false)
    });
});

let lastNews = items.slice(-1);
let newsWithoutLastNews = items.slice(0, -1);


  return (
    <div className="grid">
      <Box className='sc-press-center__main-page-box'>
        <Grid container spacing={2}>
          { lastNews.map((news, i) => ( 
       
            <Grid xs={10} md={8}>
              <Item key={news.id}>
                <div className='sc-press-center__main-page-item-grid'>
                  <img src={news.image} alt={news.title}/>
                  <div>
                  <h2>{news.title}</h2>
                  <p> {news.text.slice(0,100)+'...'} </p>
                  <div className='sc-press-center__link'>
                  <Button 
                  
                  
                  href={'/press-center?id=' + news.id} endIcon={<ArrowForwardIosTwoToneIcon />}>
                    
                    learn more
                  </Button>
                  </div>
                  </div>
                  </div>
              </Item>
            </Grid>
          
          
              ))}
        { newsWithoutLastNews.map((news, i) => ( 
        <Grid xs={6} md={4}>
          <Item>
            <div className="sc-press-center__main-page-item-grid">
                  <img src={news.image} alt={news.title} />
                  
                  <div>
                    <h2>{news.title}</h2>
                  <p>{news.text.slice(0,100)+'...'} </p>
                  <div className='sc-press-center__link'>
                  <Button href={news.link + news.id} endIcon={<ArrowForwardIosTwoToneIcon />}>
                
                    learn more{" "}
                  </Button>
                  </div>
                  </div>
                </div>
                </Item>
        </Grid>
          
        ))}
        <div>
          
        <Button href='/press-center' endIcon={<ArrowForwardIosTwoToneIcon />}>
                    
                    all press relises{" "}
                  </Button>
                  </div>
        
        </Grid>
      </Box>
    </div>
  );*/}
}
