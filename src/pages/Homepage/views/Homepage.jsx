import React, { Component } from "react";
import '../styles/Homepage.style.scss';
export default class Homepage extends Component {
  render() {
    return(
      <div id="homepage-container">
        <div class="top-banner-wrapper">
          <div class="top-banner">
            <h1>Hello, I'm Rishav Medhi</h1>
            <div class="sub-heading">
              Full Stack Developer<br/>
              Tech Geek. Loves Gaming, Doodling and Action Movies
            </div>
            <nav>
              <ul class="nav-tabs">
                <li>About Me</li>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Writing</li>
                <li>Contact Me</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}