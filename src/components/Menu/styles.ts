import styled from 'styled-components';

import { CURRENT_THEME } from '../../styles/themes';

export const MenuBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: relative;

  padding: 10px 0;

  background-color: ${CURRENT_THEME.main_color};

  a {
    color: ${CURRENT_THEME.menu_text_color};
    font-weight: bold;
    font-size: 30px;
    text-decoration: none;

    padding: 10px 0;

    &:hover {
      color: ${CURRENT_THEME.menu_text_hover};
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
    color: ${CURRENT_THEME.menu_text_color};
    font-size: 20px;
    font-weight: normal;
  }
`;
