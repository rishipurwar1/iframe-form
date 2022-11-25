export const fetchCountries = async () => {
  const res = await fetch(process.env.REACT_APP_COUNTRY_API_URL);
  const data = await res.json();
  return data;
};
