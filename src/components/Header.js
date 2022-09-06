import React from "react";

const Header = () => {
  return (
    <>
      <div className="background background-centered">
        <div className="background-filter"></div>

        <div className="text-firstpage background-centered-960px">
          <h1>
            Nasza firma oferuje najwyższej
            <br />
            jakości produkty
          </h1>
          <p>Nie wierz nam na słowo - sprawdź</p>
          <button type="button" className="btn">
            oferta
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
