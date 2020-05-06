import React from "react";
import { Link } from "react-router-dom";
import { CardList, CardContainer, CountryContainer } from "../styles/styles";

function CountriesList({ countries }) {
	return (
		<CountryContainer>
			<CardList>
				{countries.map((country) => (
					<Link
						key={country.alpha3Code}
						to={`/countries/${country.alpha3Code}`}
					>
						<CardContainer>
							<h2>{country.name}</h2>
						</CardContainer>
					</Link>
				))}
			</CardList>
		</CountryContainer>
	);
}

export default CountriesList;
