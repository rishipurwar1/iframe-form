export const getStateByCountryName = (data, countryName) => {
  const country = data.find((country) => country.name === countryName);
  return country?.states;
};
