import React from "react";

const Footer = () => {
  return (
    <div className="background-centered footer">
      <div className="footerdiv background-centered-960px">
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2022</p>
        <div className="icons">
          <a className="link" href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="link" href="#">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
