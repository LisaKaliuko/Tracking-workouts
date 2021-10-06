import React from 'react';
import { Link } from 'react-router-dom';

import { logOutUser } from '../../firebase';
import { selectUser } from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';

const Menu = (): JSX.Element => {
  const user = useTypedSelector(selectUser);

  return (
    <nav className="navbar bg-dark text-white justify-content-around">
      <Link className="navbar-brand text-white m-0" to="/calendar">
        Tracking workout
      </Link>
      <div id="navbarNav">
        <ul className="navbar-nav flex-row">
          {!user.email ? (
            <>
              <li className="nav-item m-3">
                <Link to="/registration" className="nav-link text-white">
                  Регистрация
                </Link>
              </li>
              <li className="nav-item m-3">
                <Link to="/signin" className="nav-link text-white">
                  Вход
                </Link>
              </li>
            </>
          ) : null}
          {user.email ? (
            <li className="nav-item m-3">
              <Link
                to="/signin"
                onClick={logOutUser}
                className="nav-link text-white"
              >
                Выход
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
