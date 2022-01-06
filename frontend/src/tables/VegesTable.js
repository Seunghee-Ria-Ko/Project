import React from 'react'

const VegesTable = (props) => (
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
      {props.veges.length > 0 ? (
        props.veges.map((vege) => (
          <tr key={vege._id}>
            <td>{vege.key}</td>
            <td>{vege.title}</td>
            <td>{vege.name}</td>
            <td>{vege.ingredients}</td>
            <td>{vege.methods}</td>
            <td><a href={vege.detail}>Read full article</a></td>
            <td width="9%">
              <button onClick={() => { props.editRow(vege) }}
                className="button muted-button">Edit</button>
              <button onClick={() => props.deleteVege(vege._id)}
                className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No Veges</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default VegesTable