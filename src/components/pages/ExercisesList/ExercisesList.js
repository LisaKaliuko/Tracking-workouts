import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { firestore } from '../../../index';
import { selectCategory } from '../../../core/selectors/selectors';
import { ArrowRightExercise } from '../../../shared/icons/icons';
import { setExercise, setLoading } from '../../../core/actions/actionsCreator';
import './exercisesList.css';

const ExercisesList = () => {
  const category = useSelector(selectCategory);
  const [arrOfExercises, setArrOfExercises] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    if (category) {
      firestore
        .collection('exercises')
        .where('categoryId', '==', category.id)
        .get()
        .then((snapshot) => {
          setArrOfExercises(snapshot.docs.map((doc) => ({ ...doc.data() })));
        })
        .then(() => setLoading(false));
    }

    return () => {
      setArrOfExercises([]);
    };
  }, [category]);

  const chooseExercise = (exercise) => {
    setExercise(exercise);
    const url = `/exercises:${exercise.id}`;
    history.push(url);
  };

  return (
    <div className="exercises_container">
      {arrOfExercises.length !== 0
        ? arrOfExercises.map((exercise) => {
            return (
              <div
                className="exercises_item"
                key={exercise.id}
                onClick={() => chooseExercise(exercise)}
              >
                <img src={exercise.img} className="exercises_item-img" />
                <div className="exercises_item-text">
                  <p className="exercises_item-text-title">{exercise.name}</p>
                  <p className="exercises_item-text-sets">
                    {exercise.description}
                  </p>
                </div>
                <ArrowRightExercise />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ExercisesList;
