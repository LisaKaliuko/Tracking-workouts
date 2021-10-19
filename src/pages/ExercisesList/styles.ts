import styled from 'styled-components';

import { DEVICES } from '../../constants/constants';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 10px 30px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: ${(props) => props.theme.exercisesList.textColor};
  cursor: pointer;

  border-top: 1px solid ${(props) => props.theme.exercisesList.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.exercisesList.borderColor};

  margin: 20px 0px;
  padding: 15px 0px;

  @media ${DEVICES.tablet} {
    margin: 20px;
  }

  @media ${DEVICES.laptop} {
    padding: 15px;
  }

  img {
    width: 130px;

    @media ${DEVICES.laptopL} {
      width: 300px;
    }
  }
`;

export const ImageBlock = styled.div`
  max-width: 65px;
  overflow: hidden;

  @media ${DEVICES.laptopL} {
    max-width: 155px;
  }
`;

export const Title = styled.p`
  font-size: 16px;

  margin-bottom: 5px;

  @media ${DEVICES.laptop} {
    font-size: 18px;
  }

  @media ${DEVICES.laptopL} {
    font-size: 23px;
  }

  @media ${DEVICES.desktop} {
    font-size: 35px;
  }
`;

export const Description = styled.p`
  color: #c4c4c4;
  font-size: 14px;

  margin-bottom: 5px;

  @media ${DEVICES.laptopL} {
    font-size: 18px;
  }

  @media ${DEVICES.desktop} {
    font-size: 30px;
  }
`;
