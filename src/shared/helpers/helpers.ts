import { Day } from '../../core/actions/UserActions';
import { RootState } from '../../core/redusers/rootReducer';

type DayObject = {
  id: number;
  date: number;
};

const errorMessage = (error: unknown) => {
  let errorMessage = 'some error';
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  return errorMessage;
};

export const saveState = (state: RootState): void => {
  const serialisedState = JSON.stringify(state);
  window.localStorage.setItem('app_state', serialisedState);
};

export const loadState = (): RootState | undefined => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');

    if (!serialisedState) return JSON.parse(JSON.stringify({}));

    return JSON.parse(serialisedState);
  } catch (err) {
    const error = errorMessage(err);
    console.log(error);
  }
};

export const getNumberOfCells = (
  firstDay: number,
  lastDay: number,
  days: number
): number => {
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

const randomNumber = () => {
  return Math.trunc(Math.random() * 100000);
};

export const getCalendarMatrix = (
  firstDay: number,
  lastDay: number,
  cells: number
): Array<Array<DayObject>> => {
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
        weekArray.push({ date: 0, id: randomNumber() });
      } else if (dayOfWeek + 7 * week - firstDay + 1 > lastDay) {
        weekArray.push({ date: 0, id: randomNumber() });
      } else {
        weekArray.push({
          date: dayOfWeek + 7 * week - firstDay + 1,
          id: randomNumber(),
        });
      }
    }
    matrix.push(weekArray);
  }
  return matrix;
};

export const checkRepeatedWorkout = (
  workouts: Array<Day>,
  year: number,
  month: number,
  day: number
): undefined | Day => {
  const result = workouts.find((item) => {
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
  return result;
};
