import React from "react";
import { styles } from "./styles";

const FormInput = ({ onChange, ...inputProps }) => {
  return (
    <div style={styles.formControl}>
      <label style={styles.label} htmlFor={inputProps.name}>
        {inputProps.label}
      </label>
      <input style={styles.input} {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
