import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import {
  setCategoryAction,
  setLoadingAction,
} from '../../../core/actions/actionsCreator';
import { firestore } from '../../..';
import './categories.css';

const Categories = () => {
  const [arrOfCategories, setArrOfCategories] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingAction(true));
    firestore
      .collection('categories')
      .get()
      .then((snapshot) => {
        const categories = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArrOfCategories(categories);
      })
      .then(() => dispatch(setLoadingAction(false)));

    return () => {
      setArrOfCategories([]);
    };
  }, []);

  const chooseCategory = (category) => () => {
    dispatch(setCategoryAction(category));
    history.push('/exercises');
  };

  return (
    <div className="categories_container">
      {arrOfCategories.map((category) => {
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
