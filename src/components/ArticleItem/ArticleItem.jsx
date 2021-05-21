import React from 'react';
import PropTypes from 'prop-types';
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

ArticleItem.propTypes = {
  link: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string
};

export default ArticleItem;