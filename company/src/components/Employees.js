import React from "react";

const Employees = () => {
  return (
    <div id="aboutus" className="background-centered">
      <div className="specialists background-centered-960px">
        <div className="divs-column">
          <h2>Nasi specjaliści</h2>

          <div className="specialist">
            <div className="picture firstpic">
              <img
                src={require("../images/employee1.jpg")}
                alt="employee's picture"
              />
            </div>
            <div className="text-about">
              <h3>Imię i nazwisko [ dział ]</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus mollitia quisquam explicabo, nobis esse pariatur
                blanditiis laborum autem, temporibus, dolorem inventore eveniet
                recusandae possimus expedita qui voluptates sequi excepturi rem
              </p>
            </div>
          </div>

          <div className="specialist">
            <div className="picture secondpic">
              <img
                src={require("../images/employee2.jpg")}
                alt="employee's picture"
              />
            </div>
            <div className="text-about">
              <h3>Imię i nazwisko [ dział ]</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus mollitia quisquam explicabo, nobis esse pariatur
                blanditiis laborum autem, temporibus, dolorem inventore eveniet
                recusandae possimus expedita qui voluptates sequi excepturi rem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
