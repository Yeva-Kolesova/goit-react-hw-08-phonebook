import { useState } from 'react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contacts/operations';
import { selectContacts } from 'store/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = ({ target }) => {
    if ([target.name][0] === 'name') {
      setName(target.value);
    }
    if ([target.name][0] === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!isName) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`${name} is already in contacts`);
    }
    setName('');
    setNumber('');
  };

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          value={name}
          required
        />
        <label htmlFor="tel">Number</label>
        <input
          onChange={handleChange}
          id="tel"
          type="tel"
          name="number"
          value={number}
          required
        />

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
