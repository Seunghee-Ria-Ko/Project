import React from "react";
const VegeMain = (props) => {
  console.log(props);
  const reactVege = props.reactVege;
  return (

    <div className="wrapper">
      <div className="reactVege">
        <h5>{reactVege.key}</h5>
        <h3>{reactVege.title}</h3>
        <p>{reactVege.name}</p>
        <p>{reactVege.ingredients}</p>
        <p>{reactVege.methods}</p>
        <p><a href={reactVege.detail}>Read full article</a></p>
        <br />
      </div>
    </div>

  )
}

export default VegeMain;
