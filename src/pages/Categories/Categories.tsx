import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { Category } from '../../core/actions/WorkoutActions';
import { setLoadingAction } from '../../core/actions/LoaderActions';
import { setCategoryAction } from '../../core/actions/WorkoutActions';
import { firestore } from '../..';
import { pathes } from '../../constants/constants';
import './categories.css';

const Categories = (): JSX.Element => {
  const [arrOfCategories, setArrOfCategories] = useState<Array<Category>>([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingAction(true));
    firestore
      .collection('categories')
      .get()
      .then((snapshot: any) => {
        setArrOfCategories(
          snapshot.docs.map((doc: any) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      })
      .then(() => dispatch(setLoadingAction(false)));

    return () => {
      setArrOfCategories([]);
    };
  }, [dispatch]);

  const chooseCategory = (category: Category) => () => {
    dispatch(setCategoryAction(category));
    history.push(pathes.EXERCISES_LIST);
  };

  return (
    <div className="categories_container">
      {arrOfCategories.map((category: Category) => {
        return (
          <div
            className="caregories_item"
            key={category.id}
            onClick={chooseCategory(category)}
          >
            <p className="category_title">{category.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
