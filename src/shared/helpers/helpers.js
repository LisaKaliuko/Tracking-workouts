export const saveState = (state) => {
  const serialisedState = JSON.stringify(state);
  window.localStorage.setItem('app_state', serialisedState);
};

export const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');

    if (!serialisedState) return {};

    return JSON.parse(serialisedState);
  } catch (err) {
    return {};
  }
};

export const getNumberOfCells = (firstDay, lastDay, days) => {
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

export const getCalendarMatrix = (firstDay, lastDay, cells) => {
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

export const checkRepeatedWorkout = (workouts, year, month, day) => {
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
