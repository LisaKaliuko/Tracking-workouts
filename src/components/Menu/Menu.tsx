import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { selectUser } from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { logOut } from '../../core/actions/UserActions';
import { PATHES } from '../../constants/constants';
import { CURRENT_THEME } from '../../styles/themes';

const MenuBlock = styled.nav`
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

const Ul = styled.ul`
  display: flex;
  flex-direction: row;

  margin: 0;

  list-style: none;
`;

const Li = styled.li`
  margin: 10px;

  a {
    color: ${CURRENT_THEME.menu_text_color};
    font-size: 20px;
    font-weight: normal;
  }
`;

const Menu: FC = (): JSX.Element => {
  const user = useTypedSelector(selectUser);
  const dispatch = useDispatch();

  const logOutUser = () => dispatch(logOut());

  return (
    <MenuBlock>
      <Link to={PATHES.CALENDAR}>Tracking workout</Link>
      <Ul>
        {!user.email ? (
          <>
            <Li>
              <Link to={PATHES.REGISTRATION}>Регистрация</Link>
            </Li>
            <Li>
              <Link to={PATHES.SIGN_IN}>Вход</Link>
            </Li>
          </>
        ) : null}
        {user.email ? (
          <Li>
            <Link to={PATHES.SIGN_IN} onClick={logOutUser}>
              Выход
            </Link>
          </Li>
        ) : null}
      </Ul>
    </MenuBlock>
  );
};

export default Menu;
