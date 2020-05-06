import React from "react";
import BlocsList from "../components/BlocsList";
import { CardList } from "../styles/styles";
function HomePage() {
	return (
		<div>
			<div>
				<h1>Region Blocs:</h1>
				<CardList>
					<BlocsList />
				</CardList>
			</div>
		</div>
	);
}

export default HomePage;
