import { useState, useCallback } from "react";
import ChevronIcon from "../../assets/icons/chevron-icon.svg";
import "./Collapse.scss";
import Button from "../Button/Button";

/**
 * @description Represents a reusable collapse component with a slide transition on vertical axis.
 *
 * @param {Object} props - The properties object for the Collapse component.
 * @param {string} props.title - The title of the collapse.
 * @param {string} props.description - The description of the collapse.
 * @returns {React.ReactNode} A Collapse element with specified properties.
 */
const Collapse = ({ title, description = "", list = [] }) => {
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen((open) => !open), []);

  return (
    <div className="collapse">
      <div className="collapse-header">
        <span>{title}</span>
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
        <p>{description}</p>
        <ul>
          {list?.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Collapse;
