import React, { Component } from "react";
import '../styles/Homepage.style.scss';
export default class Homepage extends Component {
  render() {
    return(
      <div>
        <div id="top-container">
          <div className="top-banner-wrapper">
          <div class="top-banner">
            <h1>Hello, I'm Rishav Medhi</h1>
            <div class="sub-heading">
              Full Stack Developer<br/>
              Tech Geek. Loves Gaming, Doodling and Action Movies
            </div>
            <nav>
              <ul class="nav-tabs">
                <li>
                  <a href="/about-me">About Me</a>
                </li>
                <li>
                <a href="https://github.com/rishavmedhi">
                  Github
                </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rishavmedhi/">LinkedIn</a>
                </li>
                <li>
                  <a href="/writing">Writing</a></li>
                <li>
                  <a href="/contact">Contact Me</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        </div>
        <main>
          <div className="about-me-wrapper">
            <h2>About Me</h2>
          </div>
        </main>
      </div>
    )
  }
}