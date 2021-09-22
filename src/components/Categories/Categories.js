import React, { useState } from 'react';
import './categories.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { setCategory } from '../../actions/actionsCreator';
import { firestore } from '../..';
import Loader from '../Loader/Loader';

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
                    onClick={() => {
                      setCategory({ ...category });
                    }}
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
