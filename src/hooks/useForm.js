import { useState } from "react";
import { getStateByCountryName } from "../utils/index";

export const useForm = (options) => {
  const [formData, setFormData] = useState({});
  const [states, setStates] = useState([]);

  const handleCountryChange = async (countriesData, countryName) => {
    const data = await getStateByCountryName(countriesData, countryName);
    setFormData({ ...formData, country: countryName });
    setStates(data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validations = options?.validations;

    if (validations) {
      let valid = true;
      const newErrors = {};

      for (const key in validations) {
        const value = formData[key];
        const validation = validations[key];

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }
      }

      if (!valid) {
        window.parent.postMessage(
          { type: "submit", value: { error: newErrors } },
          "*"
        );
        return;
      }
      window.parent.postMessage(
        { type: "submit", value: { success: "All fields are valid!" } },
        "*"
      );
    }
  };

  return {
    formData,
    states,
    handleInputChange,
    handleCountryChange,
    handleSubmit,
  };
};
