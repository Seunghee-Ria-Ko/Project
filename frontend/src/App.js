import React from "react";
import { Routes, Route, NavLink as Link } from "react-router-dom";
import RecipePage from "./RecipePage";
import VegesPage from "./VegesPage";
import RecipePageAdmin from "./RecipePageAdmin";
import VegePageAdmin from "./VegePageAdmin";
import MyNavBar from "./components/MyNavBar";
import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/recipes" element={<RecipePage />}></Route>
          <Route path="/veges" element={<VegesPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/admin/recipe-admin" element={<RecipePageAdmin />}></Route>
          <Route path="/admin/veges-admin" element={<VegePageAdmin />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
