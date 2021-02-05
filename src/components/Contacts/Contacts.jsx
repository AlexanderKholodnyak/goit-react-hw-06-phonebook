import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import s from './Contacts.module.css';

function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.container}>
          <p className={s.name}>
            {name}: {number}{' '}
          </p>

          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;

// const Contacts = ({ contacts, onDeleteContact }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <li key={id} className={s.container}>
//         <p className={s.name}>
//           {name}: {number}{' '}
//         </p>
//         {
//           <button
//             className={s.button}
//             type="button"
//             onClick={() => onDeleteContact(id)}
//           >
//             Удалить
//           </button>
//         }
//       </li>
//     ))}
//   </ul>
// );

// export default Contacts;
