import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* <a href="/">
        {" "}
        <div className="logo-container">
          {" "}
          <img src="/logo-white.png" />
        </div>
      </a> */}
      <div className="cta-nav-container">
        {/* <a target="blank" href="https://deeel.netlify.app/cgu">
            <button className="btn-2"></button>
          </a> */}
        <a
          style={{
            color: "white",
            marginRight: "1rem",
          }}
          href="https://www.linkedin.com/company/deeel/"
          target="blank"
        >
          {/* <img
            style={{
              width: "30px",
              height: "30px",
              marginRight: "1rem",
            }}
            src="/linkedin.svg"
          /> */}
          Linkedin
        </a>
        <a
          href="https://deeel.netlify.app/cgu"
          style={{
            color: "white",
            marginRight: "1rem",
          }}
          target="blank"
        >
          CGU
        </a>
      </div>
    </footer>
  );
};

export default Footer;
