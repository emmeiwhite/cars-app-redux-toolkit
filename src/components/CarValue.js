// CarValue.jsx
import { useSelector } from "react-redux";

export default function CarValue() {
  const totalCost = useSelector(({ data: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredCars.reduce((acc, curr) => {
      return (acc += curr.cost);
    }, 0);
  });
  return (
    <div className="car-value">
      <h2>Total Value</h2>
      <h3>$ {totalCost}</h3>
    </div>
  );
}
