import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ housing }) => {
  return (
    <Link to={`/housing/${housing.id}`} className="card">
      <img src={housing.cover} />
      <span>{housing.title}</span>
    </Link>
  );
};

export default Card;
