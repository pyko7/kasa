import StarIcon from "../../components/Icons/StarIcon";
import "./Housing.scss";

/**
 * @description Represents the rating and the host of a housing component.
 *
 * @param {Object} props - The properties object for the Banner component.
 * @param {string} props.rating - The rate of a housing.
 * @param {Object} props.host - The profile picture and name of the host.
 * @returns {React.ReactNode} A HousingRateHost element with specified properties.
 */
const HousingRateHost = ({ rating, host }) => {
  return (
    <>
      <div className="housing-rate-container">
        {Array.from(Array(parseInt(rating))).map((el, idx) => (
          <StarIcon className="housing-rate housing-rate-active" key={idx} />
        ))}
        {Array.from(Array(5 - parseInt(rating))).map((el, idx) => (
          <StarIcon className="housing-rate" key={idx} />
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
