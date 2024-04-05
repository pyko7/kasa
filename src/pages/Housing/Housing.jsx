import MainLayout from "../../components/Layouts/MainLayout";
import housings from "../../assets/logements.json";
import { useLocation } from "react-router-dom";
import "./Housing.scss";
import { useEffect, useState } from "react";
import StarIcon from "../../components/Icons/StarIcon";

const Housing = () => {
  const { pathname } = useLocation();
  const [housing, setHousing] = useState(null);
  const [housingRate, setHousingRate] = useState(0);

  const housingId = pathname.split("/housing/")[1];

  useEffect(() => {
    const currentHousing = housings.find((el) => el.id === housingId);
    setHousing(currentHousing);
  }, [housingId]);

  console.log({ housing });
  return (
    <MainLayout>
      <div className="container">
        <div className="housing-picture">
          <img src={housing?.cover} alt="" />
        </div>
        <div className="housing-information">
          <span className="housing-information-title">{housing?.title}</span>
          <span className="housing-information-location">
            {housing?.location}
          </span>
        </div>
        <div className="housing-tag-container">
          {housing?.tags.map((tag, idx) => (
            <span className="housing-tag" key={idx}>
              {tag}
            </span>
          ))}
        </div>
        <div className="housing-rate-host-container">
          <div className="housing-rate-container">
            {housing &&
              Array.from(Array(parseInt(housing.rating))).map((el, idx) => (
                <StarIcon className="housing-rate-active" key={idx} />
              ))}
            {housing &&
              Array.from(Array(5 - parseInt(housing.rating))).map((el, idx) => (
                <StarIcon key={idx} />
              ))}
          </div>

          <div className="housing-host">
            <span className="housing-host-name">{housing?.host.name}</span>
            <div className="housing-host-picture">
              <img src={housing?.host.picture} alt={housing?.host.name} />
            </div>
          </div>
        </div>
        {/* <Collapse />
        <Collapse /> */}
      </div>
    </MainLayout>
  );
};

export default Housing;
