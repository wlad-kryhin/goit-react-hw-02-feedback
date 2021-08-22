import PropTypes from "prop-types";
export default function Statics({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedBack,
}) {
  return (
    <ul>
      <li>Good : {good}</li>
      <li>Neutral : {neutral}</li>
      <li>Bad : {bad}</li>
      <li>Total : {totalFeedback}</li>
      <li>Positive feedback : {positiveFeedBack}%</li>
    </ul>
  );
}
Statics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedBack: PropTypes.number,
};
