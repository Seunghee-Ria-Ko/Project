import React, { useState, useEffect } from "react";

const EditRecipeForm = (props) => {
  const [recipe, setRecipe] = useState(props.currentRecipe);

  useEffect(() => {
    setRecipe(props.currentRecipe);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setRecipe({ ...recipe, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateRecipe(recipe._id, recipe);
      }}
    >
      <h3>Edit Recipe</h3>
      <hr height="3" />
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
      <button>Update recipe</button> &nbsp;
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
