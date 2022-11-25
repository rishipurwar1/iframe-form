import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api";
import { getStateByCountryName } from "../utils";

const Form = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({});

  const handleCountryChange = async (
    countriesData,
    countryName = "Afghanistan"
  ) => {
    const data = await getStateByCountryName(countriesData, countryName);
    setFormData({ ...formData, country: countryName });
    setStates(data);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      const data = await fetchCountries();
      setCountries(data);
      handleCountryChange(data);
    };
    fetchCountriesFromAPI();
  }, []);
  return (
    <form target="iframe-form" onSubmit={handleSubmit}>
      <h1>Can you please provide your personal details?</h1>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-control">
        <label htmlFor="dob">Date of birth</label>
        <input type="date" id="dob" onChange={handleInputChange} />
      </div>
      <div className="form-control">
        <label htmlFor="contact">Contact Number</label>
        <input
          type="number"
          id="contact"
          onChange={handleInputChange}
          placeholder="Enter your contact number"
        />
      </div>
      <div className="form-control">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          onChange={(e) => handleCountryChange(countries, e.target.value)}
        >
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="state">State</label>
        <select id="state" onChange={handleInputChange}>
          {states &&
            states.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </div>
      <button className="submit-btn">Submit</button>
    </form>
  );
};

export default Form;
