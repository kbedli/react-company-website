import React from "react";
import Box from "./Box";

const Services = () => {
  const services = [
    { name: "Usługa 1", isNew: true },
    { name: "Usługa 2", isNew: false },
    { name: "Usługa 3", isNew: false },
    { name: "Usługa 4", isNew: false },
    { name: "Usługa 5", isNew: false },
    { name: "Usługa 6", isNew: false },
  ];

  return (
    <div id="ouroffer" className="aboutcompanyall background-centered">
      <div className="aboutcompany background-centered-960px">
        <div className="divs-column">
          <h2>Czym zajmuje się nasza firma?</h2>
          <div className="boxes">
            {services.map((service, index) => (
              <Box service={service} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
