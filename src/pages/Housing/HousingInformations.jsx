const HousingInformations = ({ title, location, tags }) => {
  return (
    <>
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
    </>
  );
};

export default HousingInformations;
