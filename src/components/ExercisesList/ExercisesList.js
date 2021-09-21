import React, { useEffect, useState } from 'react';
import './exercisesList.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { setExercise, setExercises } from '../../actions/actionsCreator';
import { firestore } from '../../index';

const ExercisesList = () => {
  const [arrOfExercises, setArrOfExercises] = useState([]);
  const category = useSelector((state) => state.workout.category);
  const history = useHistory();

  useEffect(() => {
    firestore
      .collection('exercises')
      .where('categoryId', '==', category.id.trim())
      .get()
      .then((snapshot) => {
        setArrOfExercises(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setExercises(arrOfExercises);
  }, [arrOfExercises]);

  return (
    <div className="exercises_container">
      {arrOfExercises.length !== 0
        ? arrOfExercises.map((exercise) => {
            return (
              <div
                className="exercises_item"
                key={exercise.id}
                onClick={() => {
                  setExercise(exercise);
                  const url = `/exercises:${exercise.id}`;
                  history.push(url);
                }}
              >
                <img src={exercise.img} className="exercises_item-img" />
                <div className="exercises_item-text">
                  <p className="exercises_item-text-title">{exercise.name}</p>
                  <p className="exercises_item-text-sets">
                    {exercise.description}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-chevron-compact-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                  />
                </svg>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ExercisesList;
