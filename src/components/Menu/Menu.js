import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { logOutUser } from '../../firebase';
import { selectUser } from '../../selectors/selectors';

const Menu = () => {
  const user = useSelector(selectUser);
  const isUserIn = JSON.parse(sessionStorage.getItem('isUserIn'));

  return (
    <nav className="navbar bg-dark text-white justify-content-around">
      <Link className="navbar-brand text-white m-0" to="/calendar">
        Tracking workout
      </Link>
      <div id="navbarNav">
        <ul className="navbar-nav flex-row">
          {!isUserIn && !user.isUserIn ? (
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
          {isUserIn || user.isUserIn ? (
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
