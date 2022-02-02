import React from "react";
import "./style.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const handleClick = () => {
    window.location.href = "#about";
  };
  return (
    <div className="home" id="home">
      <div className="home-top">
        <div className="home-image">
          <div className="img-container">
            <img src="assets/profile.jpg" alt="profile-pic" />
          </div>
        </div>
        <div className="home-text">
          <div className="intro">
            <h2>Hello! My name is</h2>
            <h1>Melissa Tan</h1>
            <h3>
              <span></span>
            </h3>
            <AwesomeButton
              type="primary"
              href="assets/melissa-Tan-resume-2022.pdf"
              target="_blank"
            >
              Resume
            </AwesomeButton>
          </div>
        </div>
      </div>
      <div className="home-bottom">
        <button type="button" onClick={handleClick}>
          <FontAwesomeIcon icon={faChevronDown} size="3x" />
        </button>
      </div>
    </div>
  );
}
