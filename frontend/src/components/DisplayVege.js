const DisplayVege = (data) => {
   return (
      data.map((vege) => (
         <div key={vege._id} className="reactVege">
            <h5>{vege.key}</h5>
            <h3>{vege.title}</h3>
            <p><b>Food Name<br/></b>{vege.name}</p>
            <p><b>Ingredient</b><br/>{vege.ingredients}</p>
            <p><b>Method</b><br/>{vege.methods}</p>
            <p><a href={vege.detail}>Read full article</a></p>
         </div>
      ))

   )
}
export default DisplayVege;