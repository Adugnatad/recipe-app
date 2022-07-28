import "./App.css";
import Recipe from "./components/Recipe";
import style from "./recipe.module.css";
import { useState, useEffect } from "react";

function App() {
  const APP_ID = "d65c690f";
  const APP_KEY = "fac3d160d724ea41ce47ef6234a1d245";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {

    await fetch(exampleReq)
    .then((response) =>response.json())
    .then((json) => {
      const data = json;
      setRecipes(data.hits);
    })
    
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <form className="search-form">
        <div className="search-header">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Your Favourite Recipes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" onClick={(e) => getSearch(e)}>
          Search
        </button>
        </div>

        <div className={style.recipe}>
        {recipes.map((recipe, index) => (
          
            <Recipe
            key={index}
            recipe={recipe}
            Title={recipe.recipe.label}
            Calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
          
        ))}
        </div>
      </form>
    </div>
  );
}

export default App;
