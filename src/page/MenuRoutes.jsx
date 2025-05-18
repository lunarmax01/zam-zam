import { Routes, Route } from "react-router-dom";
import Burger from "./All/Burger";
import Lavash from "./All/Lavash";
import Baliq from "./All/Baliq";
import AllMenu from "./All/All";

function MenuRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Burger />} />
      <Route path="/lavash" element={<Lavash />} />
      <Route path="/baliq" element={<Baliq />} />
      <Route path="/all" element={<AllMenu />} />
    </Routes>
  );
}

export default MenuRoutes;
