import "./Banner.scss";

/**
 * @description Represents a reusable banner component with an optional shadow effect.
 *
 * @param {Object} props - The properties object for the Banner component.
 * @param {string} props.title - The title to be displayed in the banner.
 * @param {string} props.backgroundImage - The URL of the background image for the banner.
 * @param {string} [props.shadow="light"] - The shadow effect to be applied to the banner. Can be "light" or empty.
 * @param {string} [props.alt=""] - The alternate text for the background image.
 * @returns {React.ReactNode} A banner element with specified properties.
 */
const Banner = ({ title, backgroundImage, shadow = "light", alt = "" }) => {
  return (
    <div
      className={`banner ${shadow === "light" ? "banner-light-shadow" : ""}`}
    >
      <img src={backgroundImage} alt={alt} />
      <span>{title}</span>
    </div>
  );
};

export default Banner;
