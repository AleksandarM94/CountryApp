import axios from "axios";

function getAll() {
  return axios.get("https://restcountries.eu/rest/v2/all");
}

function getOne(alpha3) {
  return axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3}`);
}

function getAllInBloc(bloc) {
  return axios.get(`https://restcountries.eu/rest/v2/regionalbloc/${bloc}`);
}

function getAllByAlpha3(alpha3s) {
  const requests = alpha3s.map((alpha3) => CountriesApi.getOne(alpha3));
  return Promise.all(requests).then((responses) =>
    responses.map((response) => response.data)
  );
}

export const CountriesApi = { getAll, getOne, getAllInBloc, getAllByAlpha3 };
