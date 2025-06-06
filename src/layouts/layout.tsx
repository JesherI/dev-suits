import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../views/Home.css';
export default function Layout() {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
}