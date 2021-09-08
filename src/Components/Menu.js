import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <p>
        <Link to="/registration">Registration</Link>
      </p>
      <p>
        <Link to="/signinemail">Sign In</Link>
      </p>
      {/* <p>
        <Link to="/signin">Sign In with Google</Link>
      </p> */}
    </div>
  );
};

export default Menu;
