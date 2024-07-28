import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";
import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter) || "";

  return (
    <div className={css.container}>
      <label className={css.label}>Find contacts by name</label>
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
        placeholder="Enter name..."
      />
    </div>
  );
}
// import css from "../SearchBox/SearchBox.module.css";
// import { useId } from "react";

// export default function SearchBox({ value, onFilter }) {
//   const filterFrendsdId = useId();
//   return (
//     <div className={css.container}>
//       <label htmlFor={filterFrendsdId} className={css.label}>
//         Find contacts by name
//       </label>
//       <input
//         id={filterFrendsdId}
//         name="filter"
//         type="text"
//         value={value}
//         onChange={(event) => onFilter(event.target.value)}
//         placeholder="Enter name..."
//       />
//     </div>
//   );
// }
