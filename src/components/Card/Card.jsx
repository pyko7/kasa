import { Link } from "react-router-dom";
import "./Card.scss";

/**
 * @description Represents a Card component used for housings.
 *
 * @param {Object} housing - The properties object for the Card component.
 * @param {number} housing.id - The id of the housing.
 * @param {string} housing.cover - The URL of the cover image for the housing.
 * @param {string} housing.title - The title of the housing.
 * @returns {React.ReactNode} A Card element with specified properties.
 */
const Card = ({ housing }) => {
  return (
    <Link to={`/housing/${housing.id}`} className="card">
      <img src={housing.cover} />
      <span>{housing.title}</span>
    </Link>
  );
};

export default Card;
