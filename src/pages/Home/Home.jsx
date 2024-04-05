import Card from "../../components/Card/Card";
import housings from "../../assets/logements.json";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import bannerBackgroundImage from "../../assets/images/source_1.png";

const bannerTitle = "Chez vous, partout et ailleurs";

/**
 * @description Represents the main page component.
 * @returns {React.ReactNode} An Home element.
 */
const Home = () => {
  return (
    <div className="container">
      <Banner
        title={bannerTitle}
        backgroundImage={bannerBackgroundImage}
        withFilter
      />
      <div className="cards_container">
        {housings.map((housing) => (
          <div className="card-container" key={housing.id}>
            <Card housing={housing} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
