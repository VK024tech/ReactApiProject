import React from "react";

export default function CountryCard({ name, flag, population, region, capital }) {
  return (
    <a className="country-card" href={`/country.html?name=${name}`}>
      <img src={flag} alt={name + " Flag"} georgia="" />
      <div className="card-text" bis_skin_checked="1">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </a>
  );
}
