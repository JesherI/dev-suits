import { NavLink } from "react-router-dom";

const Navbar = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `relative uppercase font-semibold tracking-wide px-4 py-2 transition-colors duration-300 
        ${isActive ? 'text-yellow-400' : 'text-white/80 hover:text-yellow-300'}
        after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full
        after:scale-x-0 after:bg-yellow-400 after:transition-transform after:duration-300
        hover:after:scale-x-100`;
    return (
        <nav className="bg-zinc-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-10">
                <NavLink to="/" className={linkClass}>
                    Home
                </NavLink>
                <NavLink to="/about" className={linkClass}>
                    About
                </NavLink>
                <NavLink to="/contact" className={linkClass}>
                    Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
