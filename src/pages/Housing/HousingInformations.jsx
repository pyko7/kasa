/**
 * @description Represents the informations of a housing component.
 *
 * @param {Object} props - The properties object for the Banner component.
 * @param {string} props.title - The title of the housing.
 * @param {string} props.location - The location of the housing.
 * @param {Object} props.tags - The list of the housing tags.
 * @returns {React.ReactNode} A HousingInformations element with specified properties.
 */
const HousingInformations = ({ title, location, tags }) => {
  return (
    <div className="housing-information-tag-container">
      <div className="housing-information">
        <span className="housing-information-title">{title}</span>
        <span className="housing-information-location">{location}</span>
      </div>
      <div className="housing-tag-container">
        {tags.map((tag, idx) => (
          <span className="housing-tag" key={idx}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HousingInformations;
