import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Footer from "./components/footer";
import DisplayRecipe from "./components/DisplayRecipe";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/",
});

function RecipePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await axiosClient.get("/recipes");
      setRecipes(response.data);
      console.log(response.data);
    }
    getRecipes();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">{DisplayRecipe(recipes)}</div>
      <Footer />
    </div>
  );
}

export default RecipePage;
