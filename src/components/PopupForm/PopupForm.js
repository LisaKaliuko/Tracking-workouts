import React from 'react';
import { Link } from 'react-router-dom';

const PopupForm = () => {
  return (
    <form className="position-fixed fixed-top start-50 top-50 translate-middle py-5 border border-secondary bg-light w-50 m-auto">
      <h3 className="m-3">Закончить тренировку?</h3>
      <div>
        <Link to="/calendar" className="btn btn-primary m-3 px-4">
          Да
        </Link>
        <Link to="/exercises" className="btn btn-primary m-3 px-4">
          Нет
        </Link>
      </div>
    </form>
  );
};

export default PopupForm;
