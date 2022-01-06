const DisplayRecipe = (data) => {
   return (
      data.map((recipe) =>
         <div key={recipe.id} className="reactRecipe">
            <h5>{recipe.key}</h5>
            <h3>{recipe.title}</h3>
            <p><b>Food Name<br/></b>{recipe.name}</p>
            <p><b>Ingredient</b><br/>{recipe.ingredients}</p>
            <p><b>Method</b><br/>{recipe.methods}</p>
            <p><a href={recipe.detail}>Read full article</a></p>
         </div>
      )

   )
}
export default DisplayRecipe;