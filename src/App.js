import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav";

import CountryPage from "./pages/CountryPage";
import CountriesBlocPage from "./pages/CountriesBlocPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AllCountriesPage from "./pages/AllCountriesPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {} from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [themeMode, setThemeMode] = useState("light");
	const theme = createMuiTheme({
		palette: {
			type: themeMode,
			primary: {
				main: themeMode === "light" ? "#3f51b5" : "#111",
			},
		},
	});

	const handleLightMode = () => {
		document.querySelector("body").style.backgroundColor = "#fff";

		setThemeMode("light");
	};
	const handleDarkMode = () => {
		document.querySelector("body").style.backgroundColor = "#212121";

		setThemeMode("dark");
	};
	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<div
						className="App"
						style={{
							color: themeMode === "light" ? "#212121" : "#fff",
						}}
					>
						<Nav
							themeMode={themeMode}
							lightMode={handleLightMode}
							darkMode={handleDarkMode}
						/>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/about" component={AboutPage} />
							<Route
								path="/countries/bloc/:bloc"
								exact
								component={CountriesBlocPage}
							/>
							<Route path="/countries/:alpha3" exact component={CountryPage} />
							<Route path="/countries" exact component={AllCountriesPage} />
						</Switch>
					</div>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
