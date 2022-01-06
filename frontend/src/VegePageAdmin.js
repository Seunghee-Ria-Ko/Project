import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AddVegeForm from "./forms/AddVegeForm";
import EditVegeForm from "./forms/EditVegeForm";
import VegesTable from "./tables/VegesTable";
import "./styles.css";
import VegePageAdminHeading from "./components/VegePageAdminHeading";
import Footer from "./components/footer";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/",
});

function VegePageAdmin() {
  const initialFormState = {
    id: null,
    key: 0,
    title: "",
    name: "",
    ingredients: "",
    methods: "",
    detail: "",
  };

  const [veges, setVeges] = useState([]);

  useEffect(() => {
    async function getVeges() {
      const response = await axiosClient.get("/veges");
      setVeges(response.data);
      console.log(response.data);
    }
    getVeges();
  }, []);

  const [currentVege, setCurrentVege] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  async function addVege(vege) {
    try {
      const response = await axiosClient.post("/add/vege", vege);
      setVeges(response.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  const deleteVege = async (itemId) => {
    setEditing(false);
    await axiosClient.delete(`/delete/vege/${itemId}`);
    console.log("Vege deleted!");
    window.location.reload();
  };

  const updateVege = async (itemId, updatedVege) => {
    setEditing(false);
    let response = await axiosClient.patch(
      `/update/vege/${itemId}`,
      updatedVege
    );
    window.location.reload();
    console.log("Recipe updated!");
    console.log(response);
  };

  const editRow = (vege) => {
    setEditing(true);

    setCurrentVege({
      _id: vege._id,
      key: vege.key,
      title: vege.title,
      name: vege.name,
      ingredients: vege.ingredients,
      methods: vege.methods,
      detail: vege.detail,
    });
  };

  return (
    <div className="App">
      <br /> <br />
      <VegePageAdminHeading />
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <EditVegeForm
                editing={editing}
                setEditing={setEditing}
                currentVege={currentVege}
                updateVege={updateVege}
              />
            </Fragment>
          ) : (
            <Fragment>
              <AddVegeForm addVege={addVege} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <VegesTable veges={veges} editRow={editRow} deleteVege={deleteVege} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default VegePageAdmin;
