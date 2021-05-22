import React from 'react';
import './styles.scss';

const AboutMe = (props) => {
  return(
    <div>
      <h1>About Me</h1>
      <div className="content">
        <p> 
          I&apos;m a full-stack-developer at <a href="https://zolostays.com/">Zolo</a>.
          <br/>
          I am currently working on projects in Nodejs, Express and React.
        </p>
        <p>I also photograph sunsets and cool stuff around me. Check out my <a href="https://www.instagram.com/the_clicky_sight/">Instagram</a>.</p>
        <p>You can find me on <a href="https://twitter.com/RishavMedhi">Twitter</a>, <a href="https://github.com/rishavmedhi">Github</a> and <a href="https://www.linkedin.com/in/rishavmedhi/">Linkedin</a></p>
      </div>
    </div>    
  )
}

export default AboutMe;