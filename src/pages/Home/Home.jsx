import Card from "../../components/Card/Card";
import housings from "../../assets/logements.json";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="heading_card">
        <span>Chez vous, partout et ailleurs</span>
      </div>
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
