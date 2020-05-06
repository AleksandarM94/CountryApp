import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../styles/styles";

function Country({ country, children }) {
	return (
		<Container>
			<h2>{country.name}</h2>
			<Link to={`/countries/${country.alpha3Code}`}>
				<img style={{ width: 250 }} src={country.flag} alt="flag" />
			</Link>
			<div>
				<p>Population: {country.population}</p>
				<p>Region: {country.region}</p>
				<p>Capital City: {country.capital}</p>

				<div>{children}</div>
			</div>
		</Container>
	);
}

export default Country;
