import Card from "../UI/Card/Card";

const ResultTable = (props) => {
  return (
    <Card>
      {props.userData.map((item) => (
        <p>
          {item.username} ({item.age} years old)
        </p>
      ))}
    </Card>
  );
};
export default ResultTable;
