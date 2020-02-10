import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/header.scss'

const Header = () => {

    return (
        <header className="page-header">
            <nav className="page-nav">
                <ul>
                    <li>
                        <NavLink exact to={process.env.PUBLIC_URL + "/"} >Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;