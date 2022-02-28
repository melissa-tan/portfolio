import React from "react";
import "./style.css";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>Making people's lives easier</h1>
      <p>
        As a full stack software engineer with 6 months of working experience in
        addition to 6 months of formal education through an intensive program,
        my aim is to create easy to use and engaging web applications to allow
        enterprises to focus on what is important. Making information readily
        accessible is imperative to saving time. I take pride in designing and
        implementing sustainable solutions in which users can interface with in
        a seamless manner.
      </p>
      <br></br>
      <h5>Technologies I've been using: </h5>
      <div className="tech-display">
        <div className="left-tech">
          <h6>Languages</h6>
          <ul className="bullet">
            <li>React</li>
            <li>JavaScript ES6</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="right-tech">
          <h6>Applications</h6>
          <ul className="bullet">
            <li>GitHub</li>
            <li>JIRA</li>
            <li>Visual Studio Code</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Heroku</li>
            <li>Google Cloud Platform</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
