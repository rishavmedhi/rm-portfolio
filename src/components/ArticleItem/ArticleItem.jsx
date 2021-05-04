import React from 'react';
import './styles.scss';

const ArticleItem = (props) => {
  return(
    <article>
      <a className="article-heading" href={props.link}>
        {props.heading}
      </a>
      <p className="article-subheading">
        {props.subHeading}
      </p>
    </article>
  )
}

export default ArticleItem;