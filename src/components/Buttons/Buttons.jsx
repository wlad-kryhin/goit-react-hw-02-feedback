import s from "./Buttons.module.css";
import PropTypes from "prop-types";
export default function Buttons({ options, feedBack }) {
  return options.map((option) => {
    return (
      <button
        className={s.button}
        type="button"
        key={option}
        onClick={() => feedBack(option)}
      >
        {option}
      </button>
    );
  });
}
Buttons.propTypes = {
  options: PropTypes.object,
  feedBack: PropTypes.func,
};
