import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { setWorkoutDay } from '../../actions/actionsCreator';
import { firestore } from '../..';
import './calendar.css';

const getNumberOfCells = (firstDay, lastDay, days) => {
  // пн вт ср чт пт сб вс
  // 1  2  3  4  5  6  7
  if (firstDay === 0) {
    firstDay = 7;
  } else if (lastDay === 0) {
    lastDay = 7;
  }

  let cells = days;

  if (firstDay !== 1) {
    cells += firstDay - 1;
  }

  if (lastDay !== 7) {
    cells += 7 - lastDay;
  }

  return cells;
};

const getCalendarMatrix = (firstDay, lastDay, cells) => {
  if (firstDay === 0) {
    firstDay = 7;
  }

  const matrix = [];
  //создаю массивы недель
  for (let week = 0; week < cells / 7; week += 1) {
    const weekArray = [];
    //заполняю массив недель днями
    for (let dayOfWeek = 1; dayOfWeek <= 7; dayOfWeek += 1) {
      if (week === 0 && firstDay - 1 > dayOfWeek) {
        weekArray.push(0);
      } else if (dayOfWeek + 7 * week - firstDay + 1 > lastDay) {
        weekArray.push(0);
      } else {
        weekArray.push(dayOfWeek + 7 * week - firstDay + 1);
      }
    }
    matrix.push(weekArray);
  }

  return matrix;
};

const Calendar = () => {
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(new Date().getMonth());
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const allMonthes = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const day = new Date(year, month, 1);
  const firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
  const lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);
  const nameOfMonth = allMonthes[day.getMonth()];
  //getDay() - возвращает порядковый номер недели (вс - 0, пн - 1)
  //getDate() - возвращает день месяца (просто число)
  const cells = getNumberOfCells(
    firstDay.getDay(),
    lastDay.getDay(),
    lastDay.getDate()
  );
  const calendarMatrix = getCalendarMatrix(
    firstDay.getDay(),
    lastDay.getDate(),
    cells
  );

  useEffect(() => {
    firestore
      .collection('users')
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => setWorkouts(doc.data().dates));
      })
      .then(() => setLoading(false));

    return () => {
      setWorkouts([]);
    };
  }, []);

  const clickPrevMonth = (e) => {
    e.preventDefault();
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const clickNextMonth = (e) => {
    e.preventDefault();
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const chooseWorkoutDay = (year, month, day, cb) => {
    let isRepeatedDay = workouts.find((item) => {
      const workoutDay = new Date(
        item.year,
        item.month,
        item.day
      ).toLocaleDateString();
      const currentDay = new Date(year, month, day).toLocaleDateString();
      if (workoutDay === currentDay) {
        return item;
      }
    });
    if (isRepeatedDay === undefined || typeof isRepeatedDay === 'undefined') {
      setWorkoutDay(year, month, day);
    } else {
      cb();
      alert(
        'В этот день вы уже тренировались. Пожалуйста, выберите другой день'
      );
    }
  };

  return (
    <div className="w-75 m-auto">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className="title">График тренировок</h2>
          <div className="d-flex w-50 m-auto justify-content-around">
            <a onClick={clickPrevMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </a>
            <h4>
              {nameOfMonth}&nbsp;
              {year}
            </h4>
            <a onClick={clickNextMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
          </div>
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Пн</th>
                <th>Вт</th>
                <th>Ср</th>
                <th>Чт</th>
                <th>Пт</th>
                <th>Сб</th>
                <th>Вс</th>
              </tr>
            </thead>
            <tbody>
              {calendarMatrix.map((week) => (
                <tr key={week[0]}>
                  {week.map((day) => (
                    <td
                      key={Math.trunc(Math.random() * 100000)}
                      className={
                        year === new Date().getFullYear() &&
                        month === new Date().getMonth() &&
                        day === new Date().getDate()
                          ? 'current-day'
                          : ''
                      }
                    >
                      <Link
                        to="/categories"
                        className={
                          year > new Date().getFullYear() ||
                          month > new Date().getMonth() ||
                          day > new Date().getDate()
                            ? 'disabled-link'
                            : ''
                        }
                        onClick={(e) =>
                          chooseWorkoutDay(year, month, day, () =>
                            e.preventDefault()
                          )
                        }
                      >
                        {day || ' '}
                      </Link>
                      {workouts.length !== 0
                        ? workouts.map((item) => {
                            if (
                              item.year === year &&
                              item.month === month &&
                              item.day === day &&
                              item.isWorkout === true
                            ) {
                              return (
                                <span key={item.day} className="workout-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-trophy-fill d-block m-auto"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                                  </svg>
                                </span>
                              );
                            }
                            return;
                          })
                        : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Calendar;
