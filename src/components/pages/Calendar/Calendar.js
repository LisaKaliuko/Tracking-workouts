import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import {
  getNumberOfCells,
  getCalendarMatrix,
  checkRepeatedWorkout,
} from '../../../shared/helpers/helpers';
import { allMonthes } from '../../../constants/constants';
import {
  ArrowLeft,
  ArrowRight,
  WorkoutIcon,
} from '../../../shared/icons/icons';
import { setDay } from '../../../core/actions/actionsCreator';
import { selectArrOfWorkouts } from '../../../core/selectors/selectors';
import './calendar.css';

const Calendar = () => {
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(new Date().getMonth());
  const workouts = useSelector(selectArrOfWorkouts);
  const history = useHistory();

  const today = new Date();
  const day = new Date(year, month, 1);
  const firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
  const lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);
  const nameOfMonth = allMonthes[day.getMonth()];

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

  const chooseWorkoutDay = (dayObj) => (e) => {
    const isRepeatedDay = checkRepeatedWorkout(workouts, year, month, dayObj);

    if (isRepeatedDay === undefined) {
      setDay(year, month, dayObj);
      history.push('/categories');
    } else {
      e.preventDefault();
      alert(
        'В этот день вы уже тренировались. Пожалуйста, выберите другой день'
      );
    }
  };

  return (
    <div className="w-75 m-auto">
      <h2 className="title">График тренировок</h2>
      <div className="d-flex w-50 m-auto justify-content-around">
        <a onClick={clickPrevMonth} className="arrow">
          <ArrowLeft />
        </a>
        <h4>
          {nameOfMonth}&nbsp;
          {year}
        </h4>
        <a onClick={clickNextMonth} className="arrow">
          <ArrowRight />
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
            <tr key={week[0].date}>
              {week.map((dayObj) => (
                <td
                  key={dayObj.id}
                  className={
                    year === today.getFullYear() &&
                    month === today.getMonth() &&
                    dayObj.date === today.getDate()
                      ? 'current-day'
                      : ''
                  }
                >
                  <p
                    to="/categories"
                    className={
                      new Date(year, month, dayObj.date) > today
                        ? 'disabled-link'
                        : ''
                    }
                    onClick={chooseWorkoutDay(dayObj.date)}
                  >
                    {dayObj.date || ' '}
                  </p>
                  {workouts.length !== 0
                    ? workouts.map((item) => {
                        if (
                          item.year === year &&
                          item.month === month &&
                          item.day === dayObj.date
                        ) {
                          return (
                            <span key={item.day} className="workout-icon">
                              <WorkoutIcon />
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
    </div>
  );
};

export default Calendar;
