import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api";
import { inputs } from "../constants";

import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import { useForm } from "../hooks/useForm";
import { styles } from "./styles";
import { validators } from "../utils";

const Form = () => {
  const [countries, setCountries] = useState([]);

  const { handleSubmit, handleInputChange, handleCountryChange, states } =
    useForm(validators);

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    fetchCountriesFromAPI();
  }, []);
  return (
    <>
      <form style={styles.form} target="iframe-form" onSubmit={handleSubmit}>
        <h1 style={styles.heading}>
          Can you please provide your personal details?
        </h1>
        {inputs.map((input) => {
          const { type, name } = input;
          return type === "select" ? (
            <SelectInput
              key={name}
              onChange={
                name === "country"
                  ? (e) => handleCountryChange(countries, e.target.value)
                  : handleInputChange
              }
              data={name === "country" ? countries : states}
              {...input}
            />
          ) : (
            <FormInput key={name} onChange={handleInputChange} {...input} />
          );
        })}
        <button style={styles.submitBtn}>Submit</button>
      </form>
    </>
  );
};

export default Form;
