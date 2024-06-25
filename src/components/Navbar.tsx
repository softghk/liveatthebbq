// Navbar.tsx
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import {FaTimes} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";

interface Route {
    path: string;
    name: string;
}

interface NavbarProps {
    routes: Route[];
}

export const Navbar: React.FC<NavbarProps> = ({ routes }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const closeOverlay = () => {
        setIsOpen(false)
    }

    const renderLinks = () => (
            routes.filter((route) => !['resident', 'mix', 'home'].includes(route.name))
                .map((route, index) => (
                    <Fade>
                    <Link to={route.path} key={index} onClick={closeOverlay}>
                        {route.name.toUpperCase()}
                    </Link>
                    </Fade>
                ))
    )

    return (
        <Fade top>
            <div className="navbar">
                <div className="navbar-contents">
                    <div className="navbar-left">
                        <div className="navbar-logo">
                            <Link to="/">
                                <h1>Live At The BBQ</h1>
                                <h6>Unity Mek We</h6>
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-right">
                        <div className={isOpen ? "navbar-links-overlay" : "navbar-links"}>
                            {renderLinks()}
                        </div>

                        <div className="navbar-icons" onClick={toggleIsOpen}>
                            {isOpen ? <FaTimes className="icon"/> : <GiHamburgerMenu className="icon"/>}
                        </div>
                    </div>
                </div>
            </div>

        </Fade>
    );
};
