import React from "react";

const Nav = () => {
  return (
    <>
      <div className="background-centered navigation">
        <div className="header background-centered-960px">
          <div className="companyname">
            <a className="link" href="#">
              nasza firma
            </a>
          </div>
          <ul className="nav_links">
            <li>
              <a className="link" href="#aboutus">
                o nas
              </a>
            </li>
            <li>
              <a className="link" href="#ouroffer">
                oferta
              </a>
            </li>
            <li>
              <a className="isdisabled link" href="#">
                kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
