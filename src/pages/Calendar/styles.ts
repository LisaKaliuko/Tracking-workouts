import styled from 'styled-components';

export const CalendarPageContainer = styled.div`
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
  color: #000000;
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

export const DayItem = styled.p`
  margin-bottom: 0px;

  cursor: pointer;

  &:hover {
    font-weight: 500;
    color: #0094d4;
  }
`;
