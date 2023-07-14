import Card from "../../shared/Card/Card";
import { RowResultComponent } from "./Elements";
const ResultTable = ({userData}) => {
  return (
    <Card>
      {userData.map((item) => (
        <RowResultComponent key={Math.random()}>
          {item.username} ({item.age} years old)
        </RowResultComponent>
      ))}
    </Card>
  );
};
export default ResultTable;
