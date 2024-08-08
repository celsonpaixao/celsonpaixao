import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Stacks from "./stacks/Stacks";
import Experiences from "./experiences/Experinces";
const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Stacks />} path="/stacks" />
        <Route element={<Experiences />} path="/experiences" />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
