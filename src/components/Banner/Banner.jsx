import "./Banner.scss";

const Banner = ({ title, backgroundImage, alt = "" }) => {
  return (
    <div className="banner">
      <img src={backgroundImage} alt={alt} />
      <span>{title}</span>
    </div>
  );
};

export default Banner;
