import StarIcon from "../../components/Icons/StarIcon";

import "./Housing.scss";
const HousingRateHost = ({ rating, host }) => {
  return (
    <>
      <div className="housing-rate-container">
        {Array.from(Array(parseInt(rating))).map((el, idx) => (
          <StarIcon className="housing-rate-active" key={idx} />
        ))}
        {Array.from(Array(5 - parseInt(rating))).map((el, idx) => (
          <StarIcon key={idx} />
        ))}
      </div>

      <div className="housing-host">
        <span className="housing-host-name">{host.name}</span>
        <div className="housing-host-picture">
          <img src={host.picture} alt={host.name} />
        </div>
      </div>
    </>
  );
};

export default HousingRateHost;
