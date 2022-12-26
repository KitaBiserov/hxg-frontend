import React, { useState, useEffect } from "react";
import { HeaderVideoComponent } from "../components/HeaderVideoComponent";
import Catalog, {
  catalogItemInfo
} from "../components/Catalog/Catalog";
import { useMediaQuery } from "react-responsive";
import { Categories } from "../components/Catalog/Categories";
import {CatalogSceleton} from "../components/Catalog/Sceleton";
import InfoModal from "../utils/infoModal";
import config from "../config/ru/config";
export const EnergyEquipment = () => {
  const routerURL = "/energy-equipment"
  const [URL, setURL] = useState("");
  const [items] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading] = useState(true);
  
  const backgroundImage = "energy";
  const UrlSource = "https://62c3fa7eabea8c085a67f486.mockapi.io/energy?id=";
  useEffect(() => {
    setURL(UrlSource);
  }, [URL]);

  const handleClickCategory = (id: number) => {
    setCategoryId(id);
  };
  const isMobileScreen = useMediaQuery({
    query: "(max-width: 576px)",
  });
  return (
    <>
      <HeaderVideoComponent
        theme={"a header__link-black"}
        backgroundImage={backgroundImage}
        content={config.energyPage.energyHeaderContent}
        category={categoryId}
      />

      <div className="grid">
        <InfoModal />
        <div className="sc-catalog">
          {isMobileScreen === false ? (
            <div className="sc-catalog__catalog-grid">
              <div className="sc-catalog__categories-container">
                <Categories
                  categories={config.energyPage.energyCategories}
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
                  categories={config.energyPage.energyCategories}
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

export default EnergyEquipment;
