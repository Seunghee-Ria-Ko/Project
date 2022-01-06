import React from "react";
const curYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      <hr />
      <p>Copyright &copy; {curYear} by Ria</p>
      <br /> <br />
    </footer>
  );
};

export default Footer;
