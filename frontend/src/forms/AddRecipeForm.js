import React, { useState } from "react";

const AddRecipeForm = (props) => {
  const initialFormState = {
    id: null,
    key: "",
    title: "",
    name: "",
    ingredients: "",
    methods: "",
    detail: "",
  };
  const [recipe, setRecipe] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setRecipe({ ...recipe, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !recipe.key ||
          !recipe.title ||
          !recipe.name ||
          !recipe.ingredients ||
          !recipe.methods ||
          !recipe.detail
        )
          return;

        props.addRecipe(recipe);
        console.log(recipe);
        setRecipe(initialFormState);
      }}
    >
      <h3>Add New Recipe</h3>
      <hr height="3" />
      <label>Key</label>
      <input
        type="text"
        name="Key"
        value={recipe.Key}
        onChange={handleInputChange}
      />
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={recipe.title}
        onChange={handleInputChange}
      />
      <label>Name</label>
      <textarea
        id="textarea"
        name="name"
        value={recipe.name}
        onChange={handleInputChange}
      ></textarea>
      <label>Ingredients</label>
      <textarea
        id="textarea"
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleInputChange}
      ></textarea>
      <label>Methods</label>
      <textarea
        id="textarea"
        name="methods"
        value={recipe.methods}
        onChange={handleInputChange}
      ></textarea>
      <label>Detail</label>
      <input
        type="text"
        name="detail"
        value={recipe.detail}
        onChange={handleInputChange}
      />
      <p> </p>
      <button>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
