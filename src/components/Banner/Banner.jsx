import "./Banner.scss";

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
