export const getStateByCountryName = (data, countryName) => {
  const country = data.find((country) => country.name === countryName);
  return country?.states;
};

export const validators = {
  validations: {
    name: {
      required: {
        value: true,
        message: "This field is required.",
      },
      pattern: {
        value: "^[A-Za-z0-9]{4,10}$",
        message: "Name should be between 4-10 characters.",
      },
    },
    dob: {
      required: {
        value: true,
        message: "This field is required.",
      },
    },
    contact: {
      pattern: {
        value: "[1-9]{1}[0-9]{9}",
        message: "This number needs to be 10 digits long.",
      },
    },
    country: {
      required: {
        value: true,
        message: "This field is required",
      },
    },
    state: {
      required: {
        value: true,
        message: "This field is required",
      },
    },
    email: {
      pattern: {
        value: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
        message: "This email is not valid.",
      },
    },
  },
};
