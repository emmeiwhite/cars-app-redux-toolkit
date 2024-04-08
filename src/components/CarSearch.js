import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

export default function CarSearch() {
  const dispatch = useDispatch();

  const search = useSelector((state) => {
    return state.data.searchTerm;
  });
  const handleChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="car-search">
      <h2>My Cars</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}
