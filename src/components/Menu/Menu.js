import React from 'react';
import { Link } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { logOutUser } from '../../firebase';

const Menu = () => {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <nav className="navbar bg-dark text-white justify-content-around">
      <a className="navbar-brand text-white" href="">
        Tracking workout
      </a>
      <div id="navbarNav">
        <ul className="navbar-nav flex-row">
          {isLoaded(auth) && isEmpty(auth) ? (
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
          {isLoaded(auth) && !isEmpty(auth) ? (
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

    // <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-around">
    //   <h3 className="navbar-brand">Tracking workouts</h3>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       {isLoaded(auth) && isEmpty(auth) ? (
    //         <>
    //           <li className="nav-item active">
    //             <Link to="/registration" className="nav-link">
    //               Регистрация
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="/signin" className="nav-link">
    //               Вход
    //             </Link>
    //           </li>
    //         </>
    //       ) : null}
    //       {isLoaded(auth) && !isEmpty(auth) ? (
    //         <li className="nav-item">
    //           <Link to="/" onClick={logOutUser} className="nav-link">
    //             Выход
    //           </Link>
    //         </li>
    //       ) : null}
    //     </ul>
    //   </div>

    /* <div>
        <h3 className="navbar-brand">Tracking workouts</h3>
        <div className="navbar-nav mr-auto justify-content-end">
          {isLoaded(auth) && isEmpty(auth) ? (
            <>
              <p>
                <Link to="/registration" className="nav-link">
                  Регистрация
                </Link>
              </p>
              <p>
                <Link to="/signin" className="nav-link">
                  Вход
                </Link>
              </p>
            </>
          ) : null}

          {isLoaded(auth) && !isEmpty(auth) ? (
            <p>
              <Link to="/" onClick={logOutUser} className="nav-link">
                Выход
              </Link>
            </p>
          ) : null}
        </div> */
    /* </div> */
    // </nav>
  );
};

export default Menu;
