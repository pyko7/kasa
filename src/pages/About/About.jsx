import Banner from "../../components/Banner/Banner";
import bannerBackgroundImage from "../../assets/images/source_2.png";
import Collapse from "../../components/Collapse/Collapse";
import MainLayout from "../../components/Layouts/MainLayout";
import "./About.scss";
import { collapseListElements } from "./utils";

/**
 * @description Represents the about page component.
 * @returns {React.ReactNode} An About element.
 */
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
            <Collapse
              title={el.title}
              description={el.description}
              key={el.id}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
