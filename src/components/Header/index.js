import React from 'react'
import "./style.css"


export default function header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#home">Melissa</a>
                </div>
                <div className="right">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>

                <aside className="sidebar">
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
