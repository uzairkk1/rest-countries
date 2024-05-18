import { getCountry } from "../services/country";
import { Link, useLoaderData } from "react-router-dom";

export async function countryLoader({ params }) {
  const country = await getCountry(params.countryCode);
  return country[0];
}

export default function Country() {
  const country = useLoaderData()[0];
  return (
    <div className="">
      <div>
        <Link to="/"> Back </Link>
      </div>
      <div className="country__wrapper">
        <div className="country__img-wrapper">
          <img src={country.flags.png} alt={country.flags.alt} />
        </div>
        <div className="country__content-wrapper">
          <h1 className="country__title"> {country.name.official} </h1>
          <div className="country__details">
            <div className="country__details-name">
              <p>
                Native Name: <span>{country.name.official}</span>
              </p>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital[0]}</span>
              </p>
            </div>
            <div className="country__details-name">
              <p>
                Top Level Domain: <span>{country.tld[0]}</span>
              </p>
              <p>
                Currencies:{" "}
                {Object.keys(country.currencies).map((k) => (
                  <span key={k}>{k}</span>
                ))}
              </p>
              <p>
                Languages:{" "}
                {Object.values(country.languages).map((k) => (
                  <span key={k}>{k}</span>
                ))}
              </p>
            </div>
          </div>
          <div className="country__neighbor">
            {country.borders && (
              <p>
                Border Countries:
                {country.borders.map((b) => (
                  <span>{b}</span>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
