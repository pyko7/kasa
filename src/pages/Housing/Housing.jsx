import MainLayout from "../../components/Layouts/MainLayout";
import housings from "../../assets/logements.json";
import { useLocation } from "react-router-dom";
import "./Housing.scss";
import { useEffect, useState } from "react";
import HousingRateHost from "./HousingRateHost";
import HousingInformations from "./HousingInformations";
import Collapse from "../../components/Collapse/Collapse";

const Housing = () => {
  const { pathname } = useLocation();
  const [housing, setHousing] = useState(null);

  const housingId = pathname.split("/housing/")[1];

  useEffect(() => {
    const currentHousing = housings.find((el) => el.id === housingId);
    setHousing(currentHousing);
  }, [housingId]);

  return (
    <MainLayout>
      {housing && (
        <div className="container">
          <div className="housing-picture">
            <img src={housing?.cover} alt="" />
          </div>

          <HousingInformations
            title={housing.title}
            location={housing.location}
            tags={housing.tags}
          />

          <div className="housing-rate-host-container">
            <HousingRateHost rating={housing.rating} host={housing.host} />
          </div>
          <Collapse title="Description" description={housing.description} />
          <Collapse title="Equipements" list={housing.equipments} />
        </div>
      )}
    </MainLayout>
  );
};

export default Housing;
