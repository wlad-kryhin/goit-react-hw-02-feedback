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
