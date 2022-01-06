import React from 'react'

const RecipesTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>Title</th>
        <th>Name</th>
        <th>Ingredients</th>
        <th>Methods</th>
        <th>Link</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.recipes.length > 0 ? (
        props.recipes.map((recipe) => (
          <tr key={recipe._id}>
            <td>{recipe.key}</td>
            <td>{recipe.title}</td>
            <td>{recipe.name}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.methods}</td>
            <td><a href={recipe.detail}>Read full article</a></td>
            <td width="9%">
              <button onClick={() => { props.editRow(recipe) }}
                className="button muted-button">Edit</button>
              <button onClick={() => props.deleteRecipe(recipe._id)}
                className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No Recipes</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default RecipesTable