import Button from "../Button/Button";
import ChevronIcon from "../Icons/ChevronIcon";
import "./Slideshow.scss";
const SlideshowButtons = ({ onPreviousClick, onNextClick }) => {
  return (
    <>
      <Button className="button button-left" handleClick={onPreviousClick}>
        <ChevronIcon className="chevron-left" />
      </Button>
      <Button className="button button-right" handleClick={onNextClick}>
        <ChevronIcon className="chevron-right" />
      </Button>
    </>
  );
};

export default SlideshowButtons;
