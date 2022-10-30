import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

/**
 * Component for the article links in the writing section
 * @param {*} props
 * @returns
 */
const ArticleItem = (props) => {
  return (
    <article>
      <h2>
        <a href={props.link}>{props.heading}</a>
      </h2>
      <p className="article-subheading">{props.subHeading}</p>
    </article>
  );
};

ArticleItem.propTypes = {
  /** link to the article */
  link: PropTypes.string,
  /** heading for the article element */
  heading: PropTypes.string,
  /** sub-heading for the article element */
  subHeading: PropTypes.string,
};

export default ArticleItem;
