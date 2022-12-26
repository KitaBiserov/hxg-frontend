import React from "react"
import ContentLoader from "react-content-loader"

interface CatalogSceletonPorps {
  props: any;
}



export const CatalogSceleton = ({props }:CatalogSceletonPorps) => (
  <ContentLoader 
    speed={1}
    width={350}
    height={350}
    viewBox="0 0 450 460"
    backgroundColor="#ffffff"
    foregroundColor="#ebebeb"
   
    {...props}
  >
    <rect    x="50" y="50" rx="20" ry="20" width="350" height="350" />
  </ContentLoader>
)



export const ItemSceleton = () => (
  <ContentLoader 
    speed={2}
    width={1230}
    height={600}
    viewBox="0 0 1230 600"
    backgroundColor="#ffffff"
    foregroundColor="#ebebeb"
  >
    <rect x="101" y="64" rx="0" ry="0" width="100%" height="215" /> 
    <rect x="106" y="314" rx="0" ry="0" width="100%" height="48" /> 
    <rect x="107" y="377" rx="0" ry="0" width="100%" height="196" />
  </ContentLoader>
)

