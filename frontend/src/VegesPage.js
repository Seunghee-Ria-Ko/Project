import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Footer from "./components/footer";
import DisplayVege from "./components/DisplayVege";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/",
});

function VegesPage() {
  const [veges, setVeges] = useState([]);

  useEffect(() => {
    async function getVeges() {
      const response = await axiosClient.get("/veges");
      setVeges(response.data);
      console.log(response.data);
    }
    getVeges();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">{DisplayVege(veges)}</div>
      <Footer />
    </div>
  );
}

export default VegesPage;
