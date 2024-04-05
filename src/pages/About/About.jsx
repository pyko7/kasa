import Banner from "../../components/Banner/Banner";
import bannerBackgroundImage from "../../assets/images/source_2.png";
import Collapse from "../../components/Collapse/Collapse";
import MainLayout from "../../components/Layouts/MainLayout";
import "./About.scss";
import { collapseListElements } from "./utils";

console.log(collapseListElements);

const About = () => {
  return (
    <MainLayout>
      <div className="container">
        <Banner
          title=""
          backgroundImage={bannerBackgroundImage}
          withFilter={false}
        />
        <div className="collapses_container">
          {collapseListElements.map((el) => (
            <Collapse props={el} key={el.id} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
