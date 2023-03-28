import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-3">
      <div className="footer-copyright" style={{ paddingTop: 0 }}>
        <div className="container">
          © {new Date().getFullYear()} 
          <a className="grey-text text-lighten-4 right" href="#!">
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
