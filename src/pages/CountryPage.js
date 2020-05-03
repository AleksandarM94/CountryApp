import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CountriesApi } from "../api/countries";
import Country from "../components/Country";

function CountryPage() {
  const params = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  const alpha3 = params.alpha3;

  useEffect(() => {
    setLoading(true);
    CountriesApi.getOne(alpha3)
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [alpha3]);

  return (
    <div>
      {loading ? (
        <CircularProgress disableShrink />
      ) : (
        country && (
          <Country country={country}>
            <BorderCountries alpha3s={country.borders} />
          </Country>
        )
      )}
    </div>
  );
}

function BorderCountries({ alpha3s }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    CountriesApi.getAllByAlpha3(alpha3s)
      .then((countries) => setCountries(countries))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [alpha3s]);

  if (loading) {
    return <CircularProgress disableShrink />;
  }
  if (countries.length === 0) {
    return <p>No borders</p>;
  }
  return countries.map((country) => (
    <Country key={country.alpha3Code} country={country}></Country>
  ));
}

export default CountryPage;
