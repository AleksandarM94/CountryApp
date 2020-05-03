import React from "react";
import BlocsList from "../components/BlocsList";

function HomePage() {
  return (
    <div>
      <div>
        <h1>Region Blocs:</h1>
        <div className="card-list">
          <BlocsList />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
