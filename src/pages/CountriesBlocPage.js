import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link, useParams } from "react-router-dom";
import { CountriesApi } from "../api/countries";

function CountriesBlocPage() {
  const params = useParams();
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  const bloc = params.bloc;

  useEffect(() => {
    CountriesApi.getAllInBloc(bloc)
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [bloc]);

  return (
    <div>
      <h1>List of countries for bloc {bloc}:</h1>

      {loading ? (
        <CircularProgress disableShrink />
      ) : (
        <div className="country-container">
          <div className="card-list">
            {country.map((country) => (
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
      )}
    </div>
  );
}

export default CountriesBlocPage;
