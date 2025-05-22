import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import Contact from "../views/contact";
import Layout from "./layouts/layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
