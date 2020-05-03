import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div className="country-container">
      <div className="card-list">
        {countries.map((country) => (
          <Link
            key={country.alpha3Code}
            to={`/countries/${country.alpha3Code}`}
          >
            <div className="card-container">
              <h2>{country.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
