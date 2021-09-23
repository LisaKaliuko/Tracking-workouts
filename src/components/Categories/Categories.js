import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { setCategory } from '../../actions/actionsCreator';
import { firestore } from '../..';
import './categories.css';

const Categories = () => {
  const [arrOfCategories, setArrOfCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    firestore
      .collection('categories')
      .get()
      .then((snapshot) => {
        setArrOfCategories(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .then(() => setLoading(false));
  }, []);

  const chooseCategory = (category) => {
    setCategory({ ...category });
  };

  return (
    <div className="categories_container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {arrOfCategories.length !== 0
            ? arrOfCategories.map((category) => {
                return (
                  <div
                    className="caregories_item"
                    key={category.id}
                    onClick={() => chooseCategory(category)}
                  >
                    <Link to="/exercises" className="category_title">
                      {category.title}
                    </Link>
                  </div>
                );
              })
            : null}
        </>
      )}
    </div>
  );
};

export default Categories;
