import React, { useEffect, useState } from "react";
import { searchRecipe } from "../api";
import styles from "../Styles/home.module.css";
import Card from "../Components/Card";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await searchRecipe(input);
      const data = response.hits;
      const allRecipes = data.map((element) => element.recipe);
      console.log(allRecipes);
      setRecipes(allRecipes);
    };

    getRecipes();
  }, [input]);

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.search}
      />
      <div className={styles.list}>
        {recipes.map((recipe) => (
          <Card key={`recipe-${recipe.totalCO2Emissions}`} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
