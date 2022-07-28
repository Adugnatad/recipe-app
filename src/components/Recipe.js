import React from "react";
import style from "../recipe.module.css"
const Recipe = ({Title, Calories, image, ingredients}) => {
    return (
        <div className={style.recipeshadow}>
        <h1>{Title}</h1>
        <img src={image} alt="recipe-image" />
        <ul>
            {
                ingredients.map((ingredient,index) => (
                    <li key={index}>
                       {ingredient.text}

                    </li>
                ))
            }
        </ul>
        </div>
    );
}

export default Recipe