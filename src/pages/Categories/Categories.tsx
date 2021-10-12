import React, { useEffect, FC } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { Category } from '../../core/interfaces/WorkoutInterfaces';
import {
  setCategoryAction,
  getCategories,
} from '../../core/actions/WorkoutActions';
import { selectAllCategories } from '../../core/selectors/selectors';
import { PATHES } from '../../constants/constants';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import './categories.css';

const Categories: FC = (): JSX.Element => {
  const arrOfCategories = useTypedSelector(selectAllCategories);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const chooseCategory = (category: Category) => () => {
    dispatch(setCategoryAction(category));
    history.push(PATHES.EXERCISES_LIST);
  };

  return (
    <div className="categories_container">
      {arrOfCategories
        ? arrOfCategories.map((category: Category) => {
            return (
              <div
                className="caregories_item"
                key={category.id}
                onClick={chooseCategory(category)}
              >
                <p className="category_title">{category.title}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Categories;
