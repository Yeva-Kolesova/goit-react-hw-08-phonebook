import { useDispatch } from 'react-redux';
import { setFilterAction } from 'store/contacts/contactsSlice';

export const SearchFilter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    dispatch(setFilterAction(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        onChange={handleSetFilter}
        value={filter}
        name="search"
        type="text"
      />
    </>
  );
};
