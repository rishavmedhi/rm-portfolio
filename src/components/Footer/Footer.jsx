import React from "react";

const Footer = () => {
  return (
    <footer>
      <span>
        © {new Date().getFullYear()} Rishav Medhi ·{" "}
        <a href="https://github.com/rishavmedhi/rm-portfolio">Source</a>
      </span>
    </footer>
  );
};

export default Footer;
