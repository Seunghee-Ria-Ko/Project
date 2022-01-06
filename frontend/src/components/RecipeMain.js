 import React from  'react'
 const RecipeMain = (data) => {
   return (
      data.map((recipe) => (
           <div key={recipe._id} className="reactRecipe">
           <h5>{recipe.key}</h5>
           <h3>{recipe.title}</h3>
           <p>{recipe.name}</p>
           <p>{recipe.ingredients}</p>
           <p>{recipe.methods}</p>
           <p><a href={recipe.detail}>Read full article</a></p>
           </div>
        ))
  
        )}
    export default RecipeMain;