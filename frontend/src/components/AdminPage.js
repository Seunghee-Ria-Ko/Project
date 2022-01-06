import React from "react";
import Footer from "./footer";
import axios from "axios";

const axiosClient = axios.create({
	baseURL: 'http://localhost:5000/'
});



const Admin = () => {
  return (
    <div className="App">
      <div className="heading">
      <h1>Admin Page</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
