import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { useSelector } from 'react-redux';
import { selectError } from 'store/contacts/selectors';

export const ContactsPage = () => {
  const error = useSelector(selectError);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {error && <h1>{error}</h1>}
      <h2>Contacts</h2>
      <SearchFilter />
      <Contacts />
    </div>
  );
};
