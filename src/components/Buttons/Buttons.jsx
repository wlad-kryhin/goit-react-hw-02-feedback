import s from "./Buttons.module.css";

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
