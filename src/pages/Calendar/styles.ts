import styled, { css } from 'styled-components';

export const CalendarContainer = styled.div`
  width: 75%;

  margin: auto;
`;

export const Title = styled.h2`
  text-align: center;

  margin-top: 20px;
  margin-bottom: 70px;
`;

export const MonthContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 50%;

  margin: auto;
`;

export const Arrow = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.calendar.arrow_color};
`;

export const CalendarTable = styled.table`
  font-size: 25px;

  width: 50%;
  margin: auto;

  th,
  td {
    text-align: center;

    padding: 10px;
    padding-bottom: 0px;
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
