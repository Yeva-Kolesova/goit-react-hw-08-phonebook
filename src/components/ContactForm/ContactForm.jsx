import { useState } from 'react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/operations';
import { selectContacts } from 'store/selector';

const ContactForm = () => {
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
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          id="tel"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
