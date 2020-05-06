import React, { useState, useEffect, useRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CountriesApi } from "../api/countries";
import CountriesList from "../components/CountriesList";
import TextField from "@material-ui/core/TextField";

function AllCountriesPage() {
	const inputRef = useRef(null);

	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
	const [filteredCountries, setFilteredCountries] = useState([]);

	useEffect(() => {
		setLoading(true);
		CountriesApi.getAll()
			.then((res) => {
				setCountries(res.data);
				inputRef.current.focus();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		setFilteredCountries(
			countries.filter((country) =>
				country.name.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search, countries]);

	return (
		<div>
			<h1>Countries Lists:</h1>
			<TextField
				id="standard-basic"
				placeholder="Search countries"
				ref={inputRef}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{loading ? (
				<CircularProgress disableShrink />
			) : (
				<CountriesList countries={filteredCountries} />
			)}
		</div>
	);
}

export default AllCountriesPage;
