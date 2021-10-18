import styled, { css } from 'styled-components';

import { DEVICES } from '../../constants/constants';

export const CalendarContainer = styled.div`
  width: 95%;

  margin: auto;
`;

export const Title = styled.h2`
  text-align: center;

  margin-top: 20px;
  margin-bottom: 50px;

  @media ${DEVICES.desktop} {
    font-size: 55px;
  }
`;

export const MonthContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 90%;

  margin: auto;

  @media ${DEVICES.mobileL} {
    width: 80%;
  }

  @media ${DEVICES.tablet} {
    width: 50%;
  }

  @media ${DEVICES.desktop} {
    width: 20%;

    h4 {
      font-size: 35px;
    }
  }
`;

export const Arrow = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.calendar.arrow_color};
`;

export const CalendarTable = styled.table`
  width: 50%;
  margin: auto;

  @media ${DEVICES.laptopL} {
    width: 37%;
  }

  th,
  td {
    font-size: 16px;
    text-align: center;

    padding: 10px;
    padding-bottom: 0px;

    @media ${DEVICES.mobileL} {
      font-size: 25px;
    }

    @media ${DEVICES.desktop} {
      font-size: 45px;
    }
  }
`;

export const TableData = styled.td`
  p {
    ${(props) =>
      props.className?.includes('current-day')
        ? css`
            font-weight: 700;
            color: ${(props) => props.theme.calendar.current_day_color};
          `
        : ''}
  }
`;

export const DayItem = styled.p`
  margin-bottom: 0px;

  cursor: pointer;
  ${(props) =>
    props.className?.includes('disabled-link')
      ? css`
          pointer-events: none;
        `
      : css`
          pointer-events: inherit;
        `}

  &:hover {
    font-weight: 500;
    color: ${(props) => props.theme.calendar.day_hover};
  }
`;
