import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  selectUser,
  selectCurrentCategory,
  selectCurrentDate,
} from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { logOut } from '../../core/actions/UserActions';
import { PATHES } from '../../constants/constants';
import { MenuBlock, LinksContainer, LinkItem } from './styles';

const Menu: FC = (): JSX.Element => {
  const user = useTypedSelector(selectUser);
  const category = useTypedSelector(selectCurrentCategory);
  const date = useTypedSelector(selectCurrentDate);
  const dispatch = useDispatch();

  const logOutUser = () => dispatch(logOut());

  return (
    <MenuBlock>
      <Link to={PATHES.CALENDAR}>Tracking workout</Link>
      <LinksContainer>
        {!user.email ? (
          <>
            <LinkItem>
              <Link to={PATHES.REGISTRATION}>Регистрация</Link>
            </LinkItem>
            <LinkItem>
              <Link to={PATHES.SIGN_IN}>Вход</Link>
            </LinkItem>
          </>
        ) : null}
        {user.email ? (
          <>
            {date ? (
              <LinkItem>
                <Link to={PATHES.CATEGORIES}>Категории</Link>
              </LinkItem>
            ) : null}
            {category ? (
              <LinkItem>
                <Link to={PATHES.EXERCISES_LIST}>Упражнения</Link>
              </LinkItem>
            ) : null}
            <LinkItem>
              <Link to={PATHES.SIGN_IN} onClick={logOutUser}>
                Выход
              </Link>
            </LinkItem>
          </>
        ) : null}
      </LinksContainer>
    </MenuBlock>
  );
};

export default Menu;
