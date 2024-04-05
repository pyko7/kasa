import ChevronIcon from "../Icons/ChevronIcon";
import Button from "../Button/Button";
import "./Collapse.scss";

const CollapseHeader = ({ title, handleClick, open }) => {
  return (
    <div className="collapse-header">
      <span>{title}</span>
      <Button handleClick={handleClick}>
        <ChevronIcon
          className={`collapse-icon ${open ? "collapse-icon-open" : ""}`}
        />
      </Button>
    </div>
  );
};

export default CollapseHeader;
