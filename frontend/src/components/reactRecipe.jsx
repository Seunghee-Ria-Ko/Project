import React from "react";
const ReactRecipe = (props) => {
  console.log(props);
  const reactRecipe = props.reactRecipe;
  return (
    <div className="reactRecipe">
      <h3>{reactRecipe.title}</h3>
      <p>{reactRecipe.content}</p>
      <p><a href={reactRecipe.url}>Read full article</a></p>
    </div>
  )
}

export default ReactRecipe;
