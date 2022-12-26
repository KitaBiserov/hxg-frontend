import React from "react";
import NavigationBar from "../components/NavigationBar";
import { TextField, Stack, Autocomplete } from '@mui/material';
import Footer from "../components/Footer";

import Categories from '../components/News/Categories';

export const News = () => {
{/*
  const PressCenterCategory = [ 'All', 'Success Story', 'Company News']
  const [, setTypeId] = React.useState(0);
  const SortByOptions = [ 
    {label:'newest',
    value: 0},
    {
      label: 'latest',
      value: 1}
 ]

 const [items, setItems] = React.useState([]);
 
  const [categoryId, setCategoryId] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://62c3fa7eabea8c085a67f486.mockapi.io/press-center?category=" + categoryId
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId]);

  const testNews = [

    { id: 1, 
      title: 'Test News',
      text: 'Test News Text',
      image: '',
      category: [ 0,
      1],
      date: '2015-01-01'
    },
    { id: 2, 
      title: 'Test News',
      text: 'Test News Text',
      image: '',
      category: [ 0,
        2],
      date: '2015-01-01'
    },

  ]
  const colourStyles = {
    control:  (styles) => ({...styles, 
    borderRadius: '35px'}),
    option: (styles) => ({...styles, 
      backgroundColor: 'black'}),
    input: (styles) => ({...styles,   
      backgroundColor: 'black'}),
    
  };


  return (
    <>
      <NavigationBar theme={"a header__link-black"}/>
      <section className="sc-network">
        <div className="grid">
        <div>
          <Stack spacing={2} className='sc-press-center__page__search-bar'>
          <Autocomplete
        
        
        options={testNews.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label='Search' />}
        />
      </Stack> 
      </div>
      <div className="sc-press-center__page__categories">
      <Categories
              categoryList={PressCenterCategory}
              value={categoryId}
              onClickCategory={(i) => setCategoryId(i)}
            />
       
      </div>
        <div className="sc-press-center__page__grid">
          
            
            { items.map((news) => (
              <div className="sc-press-center__page__item">
                <div className="sc-press-center__page__items-grid">
                  <div className="sc-press-center__page__item__title">
                      <img alt={news.title} src={news.image}/>
                        <h1>{news.title}</h1>
                        <dateblock key={news.id}> {news.date}</dateblock>
                  </div>
             
                  <div >{news.text}</div>
                </div>
             </div>
            ))}
            
      
              </div>
        </div>
      </section>
      <Footer/>
    </>
  );
*/}};

export default News;
