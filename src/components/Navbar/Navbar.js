import React from "react";

const Navbar = ({ leadsData }) => {
  return (
    <nav>
      <a href="/">
        {" "}
        <div className="logo-container">
          <img src="/logo-white.png" />
        </div>
      </a>
      <div className="notification">
        <div className="pastille pulse"></div>
        <small
          style={{
            color: "#2ED47A",
            fontSize: "1.7rem",
            marginRight: ".4rem",
          }}
        >
          {leadsData.length}
        </small>
        <a
          target="blank"
          href="https://app-deeel.netlify.app/"
          style={{
            color: "white",
            fontSize: "1rem",
          }}
        >
          apports d'affaires IT en ligne
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
