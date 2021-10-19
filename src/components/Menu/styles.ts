import styled from 'styled-components';

import { DEVICES } from '../../constants/constants';

export const MenuBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: relative;

  padding: 10px 0;

  background-color: ${(props) => props.theme.menu.color};

  @media ${DEVICES.desktop} {
    padding: 10px 220px;
  }

  a {
    display: none;
    color: ${(props) => props.theme.menu.textColor};
    font-weight: bold;
    font-size: 30px;
    text-decoration: none;

    padding: 10px 0;

    &:hover {
      color: ${(props) => props.theme.menu.textHover};
    }

    @media ${DEVICES.tablet} {
      display: inline-block;
    }

    @media ${DEVICES.desktop} {
      font-size: 50px;
    }
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;

  margin: 0;
  padding-left: 0;

  list-style: none;
`;

export const LinkItem = styled.li`
  margin: 10px;

  a {
    display: inline-block;
    font-size: 16px;
    font-weight: normal;

    @media ${DEVICES.tablet} {
      font-size: 20px;
    }

    @media ${DEVICES.desktop} {
      font-size: 35px;
    }
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 23%;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${(props) => props.theme.menu.radioBgColor};
  cursor: pointer;

  @media ${DEVICES.desktop} {
    width: 70px;
    height: 35px;
  }

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${(props) => props.theme.menu.toggleColor};
    transition: 0.3s;

    @media ${DEVICES.desktop} {
      width: 28px;
      height: 28px;
    }
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.menu.creativeRadioBgColor};

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.3s;
    }
  }
`;
