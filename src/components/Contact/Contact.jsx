import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contactFrend: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p className={css.text}>
          <FaPhoneAlt /> {name}
        </p>
        <p className={css.text}>
          <FaUser />
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>
  );
}
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import css from "./Contact.module.css";

// export default function Contact({
//   contactFrend: { id, name, number },
//   onDelete,
// }) {
//   return (
//     <>
//       <div>
//         <p className={css.text}>
//           <FaPhoneAlt /> {name}
//         </p>
//         <p className={css.text}>
//           <FaUser />
//           {number}
//         </p>
//       </div>
//       <button onClick={() => onDelete(id)}>Delete</button>
//     </>
//   );
// }
