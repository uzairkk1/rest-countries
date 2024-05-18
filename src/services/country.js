export async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const allCountries = await res.json();

  console.log(allCountries);
  return allCountries;
}

// export async function getCountry(id) {
//   const res = await fetch("https://restcountries.com/v3.1/alpha/" + id);
//   const country = await res.json();

//   console.log(country);
//   return country;
// }

export async function getCountry({ params }) {
  const res = await fetch(
    "https://restcountries.com/v3.1/alpha/" + params.countryCode
  );
  const country = await res.json();

  return country;
}
