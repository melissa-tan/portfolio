import React from 'react'
import "./style.css"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function index() {
    return (
        <div className="home" id="home">
            <div className="home-top">
                <div className="home-image">
                    <div className="img-container">
                        <img src="assets/profile.jpg" alt="profile-picture" />
                    </div>
                </div>
                <div className="home-text">
                    <div className="intro">
                        <h2>Hello! My name is</h2>
                        <h1>Melissa Tan</h1>
                        <h3><span></span></h3>
                        <AwesomeButton
                            type="primary"
                            href="assets/Melissa-Tan-resume-2021.pdf"
                            target="_blank"
                        >
                            Resume
                        </AwesomeButton>
                    </div>
                </div>
            </div>
            <div className="home-bottom">
                <button onClick="window.location.href='#about'">
                    <FontAwesomeIcon icon={faChevronDown} size="3x" />
                </button>

            </div>
        </div>
    )
}
