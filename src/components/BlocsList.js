import React from "react";
import { Link } from "react-router-dom";
import { BLOCS } from "../data/blocs";

function BlocsList() {
  return BLOCS.map((region) => (
    <Link key={region.id} to={`/countries/bloc/${region.inc}`}>
      <div className="card-container">
        <h2>{region.name}</h2>
      </div>
    </Link>
  ));
}

export default BlocsList;
