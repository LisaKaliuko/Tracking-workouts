import styled from 'styled-components';

import { CURRENT_THEME } from '../../styles/themes';

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 90%;
  margin: auto;
`;

export const CategoriesItem = styled.div`
  width: 520px;
  height: 270px;
  margin: 30px;
  padding: 6% 0px;

  border: 2px solid #000000;
  border-radius: 10px;

  background-image: url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/woman-works-out-at-home-royalty-free-image-1617639949.');
  background-size: cover;
`;

export const Title = styled.p`
  display: block;

  background-color: rgba(255, 255, 255, 0.8);

  font-size: 40px;
  text-align: center;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: ${CURRENT_THEME.main_color};
    cursor: pointer;
  }
`;
