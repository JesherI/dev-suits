import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? 'text-red-500 uppercase font-bold'
                        : 'text-white uppercase font-bold'
                }
                to={"/"}
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? 'text-red-500 uppercase font-bold'
                        : 'text-white uppercase font-bold'
                }
                to={"/about"}
            >
                About
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? 'text-red-500 uppercase font-bold'
                        : 'text-white uppercase font-bold'
                }
                to={"/contact"}
            >
                Contact
            </NavLink>
        </>
    );
};

export default Navbar;