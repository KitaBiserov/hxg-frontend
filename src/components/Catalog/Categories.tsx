
import React from "react";
import Accordion from "../../utils/accordion";


export interface categoryExtentionOptions {
  label: string;
  value: string;
}

export interface categoryExtention {
  title: string;
  options: categoryExtentionOptions[];
}

 export interface categoryItem {
  id: number;
  title: string;
  extentions: categoryExtention[] ;
}

export interface categoryList {
  list: categoryItem[];
}

interface CategoriesProps {
  category: number;
  categories: categoryList;
  onClickCategory: any;
}

export const Categories = (
  {category,
  categories,
  onClickCategory
} :CategoriesProps
) => {

  
  return (
    <div className="sc-catalog__categories-column">
      <ul>
        {categories.list.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}

            className={category === i ? "active" : " "}
          >
            <label>{categoryName.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
