import { useState } from "react";
import "./Slideshow.scss";
import Button from "../Button/Button";
import ChevronIcon from "../Icons/ChevronIcon";
import SlideshowButtons from "./SlideshowButtons";
/**
 * @description Represents a reusable slideshow component.
 *
 * @param {Object} props - The properties object for the Slideshow component.
 * @param {Object} props.pictures - The pictures displayed inside the sideshow.
 * @returns {React.ReactNode} A Slideshow element with specified properties.
 */
const Slideshow = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div className="slideshow">
      <div
        className="pictures-container"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {pictures.map((picture, idx) => {
          return (
            <div className="pictures-inner-container" key={idx}>
              <div className="pictures-inner-container-picture">
                <img src={picture} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      {pictures.length > 1 && (
        <span className="pictures-counter">
          {index + 1}/{pictures.length}
        </span>
      )}

      {pictures.length > 1 && (
        <SlideshowButtons
          onPreviousClick={() =>
            handleClick((index - 1 + pictures.length) % pictures.length)
          }
          onNextClick={() => handleClick((index + 1) % pictures.length)}
        />
      )}
    </div>
  );
};

export default Slideshow;
