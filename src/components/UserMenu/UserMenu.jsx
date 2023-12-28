import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from '../../store/auth/selectors';
import { logoutThunk } from '../../store/auth/operations';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{email}</p>
      <button
        onClick={() => {
          dispatch(logoutThunk())
            .unwrap()
            .then(res => {
              toast.success(`You are logout!!!`);
            })
            .catch(() => {
              toast.error('Something went wrong!!!');
            });
        }}
      >
        Logout
      </button>
    </div>
  );
};
