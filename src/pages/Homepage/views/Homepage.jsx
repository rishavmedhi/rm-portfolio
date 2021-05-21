import React, { Component } from "react";
import AboutMe from "../../../components/AboutMe/AboutMe";
import ArticleItem from "../../../components/ArticleItem/ArticleItem";
import '../styles/Homepage.style.scss';
export default class Homepage extends Component {
  render() {
    return(
      <div>
        <div id="top-container">
          <div className="top-banner-wrapper">
          <div className="top-banner">
            <h1>Hello, I&apos;m Rishav Medhi</h1>
            <div className="sub-heading">
              Full Stack Developer<br/>
              Tech Geek. Loves Gaming, Doodling and Action Movies
            </div>
            <nav>
              <ul className="nav-tabs">
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
          <div className="writing-wrapper wrapper-spacing">
            <h1>Writing</h1>
            <h3>Technical Articles</h3>
            <div className="article-wrapper">
              <ArticleItem 
                link="https://rishavmedhi.medium.com/looking-a-year-back-my-transition-to-nodejs-and-reactjs-ef96b6dab384"
                heading="Looking a year back, My transition to Nodejs and Reactjs"
                subHeading="A software developer’s experience with a tech stack transition and how it has made me a better software developer"
              />
            </div>
            <br/>
            <h3>Non-Technical Articles</h3>
            <div className="article-wrapper">
              <ArticleItem 
                link="https://medium.com/the-innovation/my-journey-on-wrapping-up-my-first-inktober-challenge-bbf8161879cf"
                heading="My Journey on wrapping up my first Inktober challenge"
                subHeading="The 31-day drawing challenge, 1 drawing a day and there’s beginner me struggling to finish it up"
              />
              <ArticleItem 
                link="https://medium.com/nerdvolume/levelling-up-your-binge-watching-game-during-this-self-isolation-time-deefa6572b57"
                heading="Leveling up your Binge-Watching Game during this self-isolation time"
                subHeading="Stay Home, Binge Watch"
              />
            </div>
          </div>
          <div className="about-me-wrapper wrapper-spacing">
            <AboutMe />
          </div>
        </main>
      </div>
    )
  }
}