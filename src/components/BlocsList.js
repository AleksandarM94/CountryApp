import React from "react";
import { Link } from "react-router-dom";
import { BLOCS } from "../data/blocs";
import { CardContainer } from "../styles/styles";
function BlocsList() {
	return BLOCS.map((region) => (
		<Link key={region.id} to={`/countries/bloc/${region.inc}`}>
			<CardContainer>
				<h2>{region.name}</h2>
			</CardContainer>
		</Link>
	));
}

export default BlocsList;
