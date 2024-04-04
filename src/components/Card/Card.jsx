import "./Card.scss";
const Card = ({ housing }) => {
  return (
    <div className="card">
      <img src={housing.cover} />
      <span>{housing.title}</span>
    </div>
  );
};

export default Card;
