import React, { Component } from "react";
import ArticleItem from "../../../components/ArticleItem/ArticleItem";
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
              <ArticleItem 
                link="https://rishavmedhi.medium.com/looking-a-year-back-my-transition-to-nodejs-and-reactjs-ef96b6dab384"
                heading="Looking a year back, My transition to Nodejs and Reactjs"
                subHeading="A software developer’s experience with a tech stack transition and how it has made me a better software developer"
              />
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