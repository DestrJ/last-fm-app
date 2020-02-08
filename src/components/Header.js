import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header className="page-header">
            <nav className="page-nav">
                <ul>
                    <li>
                        <NavLink exact to="/" >Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;