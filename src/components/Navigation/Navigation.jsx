import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../store/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav>
        {!isLoggedIn ? (
          <>
            <NavLink to="/register">Sign in</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        ) : (
          <UserMenu />
        )}
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};
