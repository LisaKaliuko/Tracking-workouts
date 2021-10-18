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
  background: ${(props) => props.theme.menu.radio_bg_color};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${(props) => props.theme.menu.toggle_color};
    transition: 0.3s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.menu.creative_radio_bg_color};

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
