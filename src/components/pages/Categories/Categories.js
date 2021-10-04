import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { setCategory, setLoading } from '../../../core/actions/actionsCreator';
import { firestore } from '../../..';
import './categories.css';

const Categories = () => {
  const [arrOfCategories, setArrOfCategories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
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
      .then(() => setLoading(false));

    return () => {
      setArrOfCategories([]);
    };
  }, []);

  const chooseCategory = (category) => () => {
    setCategory(category);
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
