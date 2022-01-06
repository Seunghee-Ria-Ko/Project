import React from "react";
import Footer from "./footer";
import axios from "axios";

const axiosClient = axios.create({
	baseURL: 'http://localhost:5000/'
});



const Home = () => {
  return (
    <div className="App">
      <div className="heading">
      <h1>Seunghee Ko | 300304205 | Final Project</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
