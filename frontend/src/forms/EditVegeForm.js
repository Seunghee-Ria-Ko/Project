import React, { useState, useEffect } from 'react'

const EditVegeForm = (props) => {
  const [vege, setVege] = useState(props.currentVege)
  
  useEffect(
    () => {
      setVege(props.currentVege)
    }, [props]
  )

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setVege({ ...vege, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateVege(vege._id, vege)
      }}
    >
    <h3>Edit Recipe</h3>
    <hr height="3"/>
    <label>Title</label>
      <input
        type="text"
        name="title"
        value={vege.title}
        onChange={handleInputChange}
      />
   <label>Name</label>
      <textarea
        id="textarea"
        name="name"
        value={vege.name}
        onChange={handleInputChange}
      ></textarea>
      <label>Ingredients</label>
      <textarea
        id="textarea"
        name="ingredients"
        value={vege.ingredients}
        onChange={handleInputChange}
      ></textarea>
      <label>Methods</label>
      <textarea
        id="textarea"
        name="methods"
        value={vege.methods}
        onChange={handleInputChange}
      ></textarea>
     <label>Detail</label>
      <input
        type="text"
        name="detail"
        value={vege.detail}
        onChange={handleInputChange}
      />
      <p> </p>
      <button>Update vege</button> &nbsp;
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditVegeForm