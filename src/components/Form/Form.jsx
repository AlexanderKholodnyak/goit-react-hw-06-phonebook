import React, { useState } from 'react';
//import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/actions';
import s from './Form.module.css';

export default function Nameform() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = (name, number) => dispatch(addContact(name, number));
  // class Form extends Component {
  // state = {
  //   name: '',
  //   number: ''
  // };
  // function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        console.log(value);
        break;
      case 'number':
        setNumber(value);
        console.log(value);
        break;
      default:
        return;
    }
  }

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (checkName(name)) {
      alert(`${name} is already added.`);
    } else if (checkNumber(number)) {
      alert(`${number} is already added.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert('All of inputs must be not empty');
    } else {
      //  dispatch(addContact(name, number));
      onSubmit(name, number);
    }

    // onSubmit(name, number);
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder=""
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          placeholder=""
          onChange={handleChange}
          className={s.input}
        />
      </label>

      {
        <button type="submit" className={s.button}>
          Add contact
        </button>
      }
    </form>
  );
}

// export default Form;
