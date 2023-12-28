import { useDispatch } from 'react-redux';
import { setFilterAction } from 'store/contactsSlice';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    dispatch(setFilterAction(e.target.value));
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleSetFilter}
      name="search"
      placeholder="Search contacts..."
    />
  );
};

export default Filter;
