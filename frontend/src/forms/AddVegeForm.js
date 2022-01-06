import React, { useState } from 'react'

const AddVegeForm = (props) => {
  const initialFormState = { id: null, key: 0, title: '', name: '', ingredients: '', methods: '', detail: '' }
  const [vege, setVege] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setVege({ ...vege, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!vege.key || !vege.title || !vege.name || !vege.ingredients
          || !vege.methods || !vege.detail) return

        props.addVege(vege)
        console.log(vege)
        setVege(initialFormState)
      }}
    >
      <h3>Add New Recipe</h3>
      <hr height="3" />
      <label>Key</label>
      <input
        type="text"
        name="Key"
        value={vege.Key}
        onChange={handleInputChange}
      />
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
      <button>Add Vege</button>

    </form>
  )
}

export default AddVegeForm