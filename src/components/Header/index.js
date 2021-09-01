import React, {useState} from 'react'
import "./style.css"



export default function Header() {

    const [activeBurger, setActiveBurger] = useState("");
    const [activeMenu, setActiveMenu] = useState(false);
    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
        setActiveBurger(activeMenu ? "active" : "")
    }
    return (
        <div className="header">
            <div className={`wrapper ${activeBurger}`}>
                <div className="left">
                    <a href="#home" className="cursive">.Melissa</a>
                </div>
                <div className={`right ${activeBurger}`} onClick={toggleMenu}>
                    <i className="burger"></i>
                </div>

                <aside className={`sidebar ${activeBurger}`} onClick={toggleMenu}>
                    <nav className="sidebar-menu">
                        <a href="#home">Home</a>
                        <a href="#about">About me</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <label for="menu-control">
                        <span className="sidebar-close"></span>

                    </label>
                </aside>
            </div>

        </div>
    )
}
