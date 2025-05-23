import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./views/about_us";
import Contacts from "./views/contacts";
import Layout from "./layouts/layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
