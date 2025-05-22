import React from "react";

const Footer: React.FC = () => (
    <footer className="text-black" style={{ textAlign: "center", padding: "1rem", background: "#f1f1f1" }}>
        <p>&copy; {new Date().getFullYear()} Dev Suits. All rights reserved.</p>
    </footer>
);

export default Footer;