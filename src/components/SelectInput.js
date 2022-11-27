import React from "react";
import { styles } from "./styles";

const SelectInput = ({ data, onChange, name, label }) => {
  return (
    <div style={styles.formControl}>
      <label style={styles.label} htmlFor={name}>
        {label}
      </label>
      <select style={styles.input} onChange={onChange} name={name}>
        {name === "country" ? (
          <>
            <option value="">Select Country</option>
            {data.map((country) => (
              <option key={country.name}>{country.name}</option>
            ))}
          </>
        ) : (
          <>
            <option value="">Select State</option>
            {data.map((state) => (
              <option key={state.name}>{state.name}</option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default SelectInput;
