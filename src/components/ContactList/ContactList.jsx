import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter) || "";

  const filteredContacts = items.filter((item) => {
    if (typeof item.name === "string") {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    }
    return false;
  });

  return (
    <ul className={css.list}>
      {filteredContacts.map((item) => (
        <li key={item.id} className={css.item}>
          <Contact contactFrend={item} />
        </li>
      ))}
      {filteredContacts.length === 0 && filter && (
        <p className={css.error}>No matches found. Check the name</p>
      )}
    </ul>
  );
}
// import Contact from "../Contact/Contact";
// import css from "../ContactList/ContactList.module.css";

// export default function ContactList({ frends, onDelete }) {
//   // console.log(frends);

//   return (
//     <ul className={css.list}>
//       {frends.map((frend) => (
//         <li key={frend.id} className={css.item}>
//           <Contact contactFrend={frend} onDelete={onDelete} />
//         </li>
//       ))}
//     </ul>
//   );
// }
