import { Button } from "@mui/material";
import React from "react";

interface DocumentationCategoriesProps {
  category: number;
  categories: string[];
  onClickCategory: any;
}

function Categories({
  category,
  categories,
  onClickCategory,
}: DocumentationCategoriesProps) {


  return (
    <div className="sc-press-center__page__categories">
      <ul>
        {categories.map((obj, i) => (
          <li key={i}>
            <button
              onClick={() => onClickCategory(i)}
              className= "btn"
            >
              <div className={ category === i ? "btn__content--white" : "btn__content"}>{obj}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
