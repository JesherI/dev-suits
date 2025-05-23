import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-zinc-900 border-t border-zinc-700 py-6 text-center text-white/70 text-sm tracking-wide">
        <p>
            &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Dev Suits</span>. All rights reserved.
        </p>
    </footer>
);

export default Footer;
