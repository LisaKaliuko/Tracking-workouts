import React, { MouseEvent, useEffect, useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import {
  getNumberOfCells,
  getCalendarMatrix,
  checkRepeatedWorkout,
} from '../../shared/helpers/helpers';
import { Day } from '../../core/interfaces/WorkoutInterfaces';
import { ALL_MONTHES, PATHES } from '../../constants/constants';
import { ArrowLeft, ArrowRight, WorkoutIcon } from '../../shared/icons/icons';
import { setDayAction } from '../../core/actions/WorkoutActions';
import { getWorkouts } from '../../core/actions/UserActions';
import {
  selectArrOfWorkouts,
  selectUser,
} from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import {
  CalendarContainer,
  Title,
  MonthContainer,
  Arrow,
  CalendarTable,
  TableData,
  DayItem,
} from './styles';

const Calendar: FC = (): JSX.Element => {
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(new Date().getMonth());
  const user = useTypedSelector(selectUser);
  const workouts = useTypedSelector(selectArrOfWorkouts);
  const history = useHistory();
  const dispatch = useDispatch();

  const today = new Date();
  const day = new Date(year, month, 1);
  const firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
  const lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);
  const nameOfMonth = ALL_MONTHES[day.getMonth()];

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
    if (user.email) dispatch(getWorkouts(user.email));
  }, [dispatch, user.email]);

  const clickPrevMonth = (e: MouseEvent) => {
    e.preventDefault();
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const clickNextMonth = (e: MouseEvent) => {
    e.preventDefault();
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const chooseWorkoutDay = (dayObj: number) => (e: MouseEvent) => {
    const isRepeatedDay = checkRepeatedWorkout(workouts, year, month, dayObj);

    if (isRepeatedDay === undefined) {
      dispatch(setDayAction(year, month, dayObj));
      history.push(PATHES.CATEGORIES);
    } else {
      e.preventDefault();
      alert(
        '?? ???????? ???????? ???? ?????? ??????????????????????????. ????????????????????, ???????????????? ???????????? ????????'
      );
    }
  };

  return (
    <CalendarContainer>
      <Title>???????????? ????????????????????</Title>
      <MonthContainer>
        <Arrow onClick={clickPrevMonth}>
          <ArrowLeft />
        </Arrow>
        <h4>
          {nameOfMonth}&nbsp;{year}
        </h4>
        <Arrow onClick={clickNextMonth}>
          <ArrowRight />
        </Arrow>
      </MonthContainer>
      <CalendarTable>
        <thead>
          <tr>
            <th>????</th>
            <th>????</th>
            <th>????</th>
            <th>????</th>
            <th>????</th>
            <th>????</th>
            <th>????</th>
          </tr>
        </thead>
        <tbody>
          {calendarMatrix.map((week) => (
            <tr key={week[0].date}>
              {week.map((dayObj) => (
                <TableData
                  key={dayObj.id}
                  className={
                    year === today.getFullYear() &&
                    month === today.getMonth() &&
                    dayObj.date === today.getDate()
                      ? 'current-day'
                      : ''
                  }
                >
                  <DayItem
                    className={
                      new Date(year, month, dayObj.date) > today
                        ? 'disabled-link'
                        : ''
                    }
                    onClick={chooseWorkoutDay(dayObj.date)}
                  >
                    {dayObj.date || ' '}
                  </DayItem>
                  {workouts && workouts.length !== 0
                    ? workouts.map((item: Day) => {
                        if (
                          item.year === year &&
                          item.month === month &&
                          item.day === dayObj.date
                        ) {
                          return (
                            <span key={item.day}>
                              <WorkoutIcon />
                            </span>
                          );
                        }
                        return;
                      })
                    : null}
                </TableData>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarTable>
    </CalendarContainer>
  );
};

export default Calendar;
