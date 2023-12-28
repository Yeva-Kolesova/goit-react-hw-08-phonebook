import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/Contacts';
import Filter from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/operations';
import { selectError, selectIsLoading } from 'store/selector';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
