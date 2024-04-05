import "./Collapse.scss";

const CollapseDescription = ({ description, open }) => {
  return (
    <div className={`collapse-content ${open ? "collapse-content-open" : ""}`}>
      {typeof description === "string" ? (
        <p>{description}</p>
      ) : (
        <ul>
          {description?.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollapseDescription;
