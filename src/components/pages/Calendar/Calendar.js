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

  const chooseWorkoutDay = (year, month, day, cb) => {
    const isRepeatedDay = checkRepeatedWorkout(workouts, year, month, day);

    if (isRepeatedDay === undefined) {
      setDay(year, month, day);
      history.push('/categories');
    } else {
      cb();
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
                    year === new Date().getFullYear() &&
                    month === new Date().getMonth() &&
                    dayObj.date === new Date().getDate()
                      ? 'current-day'
                      : ''
                  }
                >
                  <p
                    to="/categories"
                    className={
                      year > new Date().getFullYear() ||
                      month > new Date().getMonth() ||
                      dayObj.date > new Date().getDate()
                        ? 'disabled-link'
                        : ''
                    }
                    onClick={(e) =>
                      chooseWorkoutDay(year, month, dayObj.date, () =>
                        e.preventDefault()
                      )
                    }
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
