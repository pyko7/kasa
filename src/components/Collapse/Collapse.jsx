import { useState, useCallback } from "react";
import ChevronIcon from "../../assets/icons/chevron-icon.svg";
import "./Collapse.scss";
import Button from "../Button/Button";

const Collapse = ({ props }) => {
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen((open) => !open), []);

  return (
    <div className="collapse">
      <div className="collapse-header">
        <span>{props.title}</span>
        <Button handleClick={handleClick}>
          <img
            className={`collapse-icon ${open ? "collapse-icon-open" : ""}`}
            src={ChevronIcon}
            alt=""
          />
        </Button>
      </div>
      <div
        className={`collapse-content ${open ? "collapse-content-open" : ""}`}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Collapse;
