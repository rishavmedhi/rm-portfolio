import React from 'react';
import './styles.scss';

const ArticleItem = (props) => {
  return(
    <article>
      <h2>
        <a href={props.link}>
          {props.heading}
        </a>
      </h2>
      <p className="article-subheading">
        {props.subHeading}
      </p>
    </article>
  )
}

export default ArticleItem;