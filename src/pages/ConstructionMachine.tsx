import React, { useState, useEffect } from "react";
import { Categories } from "../components/Catalog/Categories";
import{CatalogSceleton} from "../components/Catalog/Sceleton";
import { HeaderVideoComponent } from "../components/HeaderVideoComponent";
import Catalog, {catalogItemInfo} from "../components/Catalog/Catalog";
import { useMediaQuery } from "react-responsive";
import InfoModal from "../utils/infoModal";
import config from "../config/ru/config";


export const ConstructionMachine = () => {
  const routerURL = "/construction-machines"
  const backgroundImage = "construction";

  const handleClickCategory = (id: number) => {
    setCategoryId(id);
  };
  const equipmentPrefix = "https://62c3fa7eabea8c085a67f486.mockapi.io/construction-machines";
  const isMobileScreen = useMediaQuery({
    query: "(max-width: 576px)",
  });
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  

 
  useEffect(() => {
    setIsLoading(true);
    fetch(`${equipmentPrefix}?category=${categoryId}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId]);
  const URL = "construction";
  
  return (
    <>
      <HeaderVideoComponent
        theme={"a header__link"}
        backgroundImage={backgroundImage}
        category={categoryId}
        content={config.constructionPage.constructionHeaderContent}
      ></HeaderVideoComponent>

      <div className="grid">
        <InfoModal />
        <div className="sc-catalog">
          {isMobileScreen === false ? (
            <div className="sc-catalog__catalog-grid">
              <div className="sc-catalog__categories-container">
                <Categories
                  categories={config.constructionPage.constructionCategories}
                  category={categoryId}
                  onClickCategory={handleClickCategory}
                />
              </div>
              <div className="sc-catalog__equipment-grid">
                {isLoading
                  ? [...new Array(6)].map((obj, index) => (
                      <CatalogSceleton props={obj} key={index} />
                    ))
                  : items.map((obj: catalogItemInfo) => (
                      <Catalog
                      routerURL={routerURL}
                      source={URL}
                      key={obj.id}
                      title={obj.model}
                      description={obj.description}
                      img={obj.image}
                      id={obj.id}
                      vendor={obj.vendor}
                      />
                    ))}
              </div>
            </div>
          ) : (
            <div className="sc-catalog__catalog-grid--mob">
              <div className="sc-catalog__categories-container">
                <Categories
                  categories={config.constructionPage.constructionCategories}
                  category={categoryId}
                  onClickCategory={handleClickCategory}
                />
              </div>
              <div className="sc-catalog__catalog-grid-sub">
                <div className="sc-catalog__equipment-grid--mob">
                  {isLoading
                    ? [...new Array(6)].map((obj, index) => (
                        <CatalogSceleton props={obj} key={index} />
                      ))
                    : items.map((obj: catalogItemInfo) => (
                        <Catalog
                        routerURL={routerURL}
                        source={URL}
                        key={obj.id}
                        title={obj.model}
                        description={obj.description}
                        img={obj.image}
                        id={obj.id}
                        vendor={obj.vendor}
                        />
                      ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ConstructionMachine;
