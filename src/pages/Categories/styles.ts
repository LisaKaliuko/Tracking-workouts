import styled from 'styled-components';

import { DEVICES } from '../../constants/constants';

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 90%;
  margin: auto;
`;

export const Item = styled.div`
  width: 520px;
  height: 270px;
  margin: 30px;
  padding: 33% 0px;

  border: 2px solid ${(prop) => prop.theme.categories.itemBorder};
  border-radius: 10px;

  background-image: url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/woman-works-out-at-home-royalty-free-image-1617639949.');
  background-size: cover;

  @media ${DEVICES.mobileL} {
    padding: 25% 0px;
  }

  @media ${DEVICES.tablet} {
    padding: 14% 0px;
  }

  @media ${DEVICES.laptop} {
    padding: 10% 0px;
  }

  @media ${DEVICES.laptopL} {
    padding: 7% 0px;
  }

  @media ${DEVICES.desktop} {
    padding: 4% 0px;
  }
`;

export const Title = styled.p`
  display: block;

  background-color: ${(prop) => prop.theme.categories.titleBackground};

  font-size: 30px;
  text-align: center;
  color: ${(prop) => prop.theme.categories.textColor};
  text-decoration: none;

  &:hover {
    color: ${(prop) => prop.theme.categories.textHover};
    cursor: pointer;
  }

  @media ${DEVICES.mobileL} {
    font-size: 37px;
  }

  @media ${DEVICES.laptopL} {
    font-size: 45px;
  }
`;
