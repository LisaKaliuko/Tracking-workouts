import React from 'react';
import { useSelector } from 'react-redux';

import { selectLoading } from '../../core/selectors/selectors';
import './loader.css';

const Loader = () => {
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  return <></>;
};

export default Loader;
