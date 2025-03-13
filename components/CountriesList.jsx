import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard'

export default function CountriesList({query}) {
  const [countriesData, setcountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=> res.json())
    .then((data)=> {
    setcountriesData(data)
    })
  }, [])




  

  return (
    <>
      <button onClick={()=>{
        setcountriesData([])
      }}>Remove All Countries</button>
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
              />
            )
          })}
      </div>
    </>
  )
}