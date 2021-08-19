export default function Buttons({ options, feedBack }) {
  return options.map((option) => {
    return (
      <button type="button" key={option} onClick={() => feedBack(option)}>
        {option}
      </button>
    );
  });
}
