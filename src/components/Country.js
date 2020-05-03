import React from "react";
import { Link } from "react-router-dom";

function Country({ country, children }) {
  return (
    <div className="container">
      <h2>{country.name}</h2>
      <Link to={`/countries/${country.alpha3Code}`}>
        <img
          style={{ width: 250, height: 200 }}
          src={country.flag}
          alt="flag"
        />
      </Link>
      <div>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital City: {country.capital}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Country;
