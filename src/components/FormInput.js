import React from "react";
import { styles } from "./styles";

const FormInput = ({ onChange, name, label, type, placeholder }) => {
  return (
    <div style={styles.formControl}>
      <label style={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        style={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
