import styled from 'styled-components';

export const MenuBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: relative;

  padding: 10px 0;

  background-color: ${(props) => props.theme.menu.color};

  a {
    color: ${(props) => props.theme.menu.text_color};
    font-weight: bold;
    font-size: 30px;
    text-decoration: none;

    padding: 10px 0;

    &:hover {
      color: ${(props) => props.theme.menu.text_hover};
    }
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;

  margin: 0;

  list-style: none;
`;

export const LinkItem = styled.li`
  margin: 10px;

  a {
    font-size: 20px;
    font-weight: normal;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.menu.radio_bg_color};
  border-radius: 34px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => props.theme.menu.toggle_color};
    border-radius: 34px;
    transition: 0.4s;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: auto;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      background-color: ${(props) => props.theme.menu.creative_radio_bg_color};
    }

    &:focus + ${Slider} {
      box-shadow: 0 0 1px ${(props) => props.theme.menu.creative_radio_bg_color};
    }

    &:checked + ${Slider}:before {
      transform: translateX(26px);
    }
  }
`;
