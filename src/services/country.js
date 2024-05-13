export async function getCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const allCountries = await res.json();

    console.log(allCountries)
    return allCountries
    
}