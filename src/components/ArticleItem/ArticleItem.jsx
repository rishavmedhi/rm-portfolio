import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { motion } from "framer-motion";

/**
 * Component for the article links in the writing section
 * @param {*} props
 * @returns
 */
const ArticleItem = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      transition={{ delay: 0.5, type: "tween", ease: "easeOut" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <article>
        <h2>
          <a href={props.link}>{props.heading}</a>
        </h2>
        <p className="article-subheading">{props.subHeading}</p>
      </article>
    </motion.div>
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
