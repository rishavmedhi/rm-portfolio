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
        <main className="main-container">
          <div className="writing-wrapper">
            <h1>Writing</h1>
            <div className="article-wrapper">
              <article>
                <div className="article-heading">
                  Looking a year back, My Transition to Nodejs and Reactjs
                </div>
                <p className="article-subheading">
                  My personal experience on how I made a tech stack transition
                </p>
              </article>
            </div>
          </div>
          <div className="about-me-wrapper">
            <h1>About Me</h1>
            <div className="content">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </main>
      </div>
    )
  }
}