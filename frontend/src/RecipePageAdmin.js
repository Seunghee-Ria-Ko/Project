import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AddRecipeForm from "./forms/AddRecipeForm";
import EditRecipeForm from "./forms/EditRecipeForm";
import RecipesTable from "./tables/RecipeTable";
import "./styles.css";
import RecipePageAdminHeading from "./components/RecipePageAdminHeading";
import Footer from "./components/footer";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/",
});

function RecipePageAdmin() {
  const initialFormState = {
    id: null,
    key: "",
    title: "",
    name: "",
    ingredients: "",
    methods: "",
    detail: "",
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await axiosClient.get("/recipes");
      setRecipes(response.data);
      console.log(response.data);
    }
    getRecipes();
  }, []);

  const [currentRecipe, setCurrentRecipe] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  async function addRecipe(recipe) {
    try {
      const response = await axiosClient.post("/add/recipe", recipe);
      setRecipes(response.data);
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  }

  const deleteRecipe = async (itemId) => {
    setEditing(false);
    await axiosClient.delete(`/delete/recipe/${itemId}`);
    console.log("Recipe deleted!");
    window.location.reload();
  };

  const updateRecipe = async (itemId, updatedRecipe) => {
    setEditing(false);
    let response = await axiosClient.patch(
      `/update/recipe/${itemId}`,
      updatedRecipe
    );
    window.location.reload();
    console.log("Recipe updated!");
    console.log(response);
  };

  const editRow = (recipe) => {
    setEditing(true);

    setCurrentRecipe({
      _id: recipe._id,
      key: recipe.key,
      title: recipe.title,
      name: recipe.name,
      ingredients: recipe.ingredients,
      methods: recipe.methods,
      detail: recipe.detail,
    });
  };

  return (
    <div className="App">
      <br /> <br />
      <RecipePageAdminHeading />
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <EditRecipeForm
                editing={editing}
                setEditing={setEditing}
                currentRecipe={currentRecipe}
                updateRecipe={updateRecipe}
              />
            </Fragment>
          ) : (
            <Fragment>
              <AddRecipeForm addRecipe={addRecipe} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <RecipesTable
            recipes={recipes}
            editRow={editRow}
            deleteRecipe={deleteRecipe}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecipePageAdmin;
