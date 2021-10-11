import React, { FC } from 'react';

import { selectLoading } from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import './loader.css';

const Loader: FC = (): JSX.Element => {
  const isLoading = useTypedSelector(selectLoading);

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
