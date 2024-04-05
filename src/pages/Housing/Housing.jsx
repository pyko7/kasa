import MainLayout from "../../components/Layouts/MainLayout";
import housings from "../../assets/logements.json";
import { useLocation, useNavigate, redirect } from "react-router-dom";
import "./Housing.scss";
import { useEffect, useState } from "react";
import HousingRateHost from "./HousingRateHost";
import HousingInformations from "./HousingInformations";
import Collapse from "../../components/Collapse/Collapse";

/**
 * @description Represents the page for a single housing component.
 * @returns {React.ReactNode} A Housing element.
 */
const Housing = () => {
  const { pathname } = useLocation();
  const [housing, setHousing] = useState(null);
  const navigate = useNavigate();
  const housingId = pathname.split("/housing/")[1];

  useEffect(() => {
    const currentHousing = housings.find((el) => el.id === housingId);

    if (currentHousing === undefined) {
      return navigate("/error");
    }
    setHousing(currentHousing);
  }, [housingId]);

  return (
    <MainLayout>
      {housing && (
        <div className="container">
          <div className="housing-picture">
            <img src={housing?.cover} alt="" />
          </div>

          <div className="housing-information-rate-container">
            <HousingInformations
              title={housing.title}
              location={housing.location}
              tags={housing.tags}
            />

            <div className="housing-rate-host-container">
              <HousingRateHost rating={housing.rating} host={housing.host} />
            </div>
          </div>

          <div className="housing-collapse-container">
            <Collapse title="Description" description={housing.description} />
            <Collapse title="Equipements" description={housing.equipments} />
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Housing;
