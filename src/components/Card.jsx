import PropTypes from "prop-types";

export default function Card({ item }) {
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img
          className="card__image"
          src={item.flags.png}
          alt={item.flags.alt}
        />
      </div>
      <div className="card__details-wrapper">
        <h2 className="card__details-headline">{item.name.common}</h2>
        <div className="card__details-content">
          <div className="card__details-content--row">
            <p>
              Population: <span> {item.population} </span>{" "}
            </p>
          </div>
          <div className="card__details-content--row">
            <p>
              Region: <span> {item.region} </span>{" "}
            </p>
          </div>
          <div className="card__details-content--row">
            <p>
              Capital: <span> {item.capital} </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
