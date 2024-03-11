// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import './home.css';

function Navbar() {
    return (
        <section className="header">
            <div className="nav">
                <nav>
                    <Link to="/"><img src="logo.png" alt="Logo" /></Link>
                    <div className="nav-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
          
        </section>
    );
}

export default Navbar;
