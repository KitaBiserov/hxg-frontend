import React, { useEffect, useState } from "react";
import { HeaderVideoComponent } from "../components/HeaderVideoComponent";
import Catalog, { catalogItemInfo } from "../components/Catalog/Catalog";
import { Categories } from "../components/Catalog/Categories";
import { CatalogSceleton } from "../components/Catalog/Sceleton";
import { useMediaQuery } from "react-responsive";
import InfoModal from "../utils/infoModal";
import config from "../config/ru/config";

export const ConsumerEquipment = () => {
  const routerURL = "/consumer-equipment";
  const equipmentPrefix =
    "https://62c3fa7eabea8c085a67f486.mockapi.io/consumer-equipment";
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isMobileScreen = useMediaQuery({
    query: "(max-width: 576px)",
  });
  const handleClickCategory = (id: number) => {
    setCategoryId(id);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${equipmentPrefix}?category=${categoryId}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId]);
  const backgroundImage = "consumer";

  const URL = "consumer";

  return (
    <>
      <HeaderVideoComponent
        theme={"a header__link"}
        backgroundImage={backgroundImage}
        content={config.consumerPage.consumerHeaderContent}
        category={categoryId}
      ></HeaderVideoComponent>

      <div className="grid">
        <InfoModal />
        <div className="sc-catalog">
          {isMobileScreen === false ? (
            <div className="sc-catalog__catalog-grid">
              <div className="sc-catalog__categories-container">
                <Categories
                  categories={config.consumerPage.consumerCategories}
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
                        key={obj.id}
                        id={obj.id}
                        title={obj.model}
                        vendor={obj.vendor}
                        description={obj.description}
                        img={obj.image}
                        source={URL}
                      />
                    ))}
              </div>
            </div>
          ) : (
            <div className="sc-catalog__catalog-grid--mob">
              <div className="sc-catalog__categories-container">
                <Categories
                  categories={config.consumerPage.consumerCategories}
                  category={categoryId}
                  onClickCategory={handleClickCategory}
                />
              </div>
              <div className="sc-catalog__catalog-grid-sub">
                <div className="sc-catalog__equipment-grid--mob">
                  {isLoading
                    ? [...new Array(3)].map((obj, index) => (
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

export default ConsumerEquipment;
