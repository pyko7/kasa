import { useState, useCallback } from "react";
import "./Collapse.scss";
import CollapseHeader from "./CollapseHeader";
import CollapseDescription from "./CollapseDescription";

/**
 * @description Represents a reusable collapse component with a slide transition on vertical axis.
 *
 * @param {Object} props - The properties object for the Collapse component.
 * @param {string} props.title - The title of the collapse.
 * @param {string | Object} props.description - The description of the collapse.
 * @returns {React.ReactNode} A Collapse element with specified properties.
 */
const Collapse = ({ title, description = "" }) => {
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen((open) => !open), []);

  return (
    <div className="collapse">
      <CollapseHeader title={title} handleClick={handleClick} open={open} />
      <CollapseDescription description={description} open={open} />
    </div>
  );
};

export default Collapse;
