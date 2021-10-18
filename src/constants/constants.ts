export const ALL_MONTHES = [
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

export const PATHES = {
  SIGN_IN: '/signin',
  REGISTRATION: '/registration',
  CALENDAR: '/calendar',
  CATEGORIES: '/categories',
  EXERCISES_LIST: '/exercises',
};

const SIZES = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const DEVICES = {
  mobileS: `(min-width: ${SIZES.mobileS})`,
  mobileM: `(min-width: ${SIZES.mobileM})`,
  mobileL: `(min-width: ${SIZES.mobileL})`,
  tablet: `(min-width: ${SIZES.tablet})`,
  laptop: `(min-width: ${SIZES.laptop})`,
  laptopL: `(min-width: ${SIZES.laptopL})`,
  desktop: `(min-width: ${SIZES.desktop})`,
};
