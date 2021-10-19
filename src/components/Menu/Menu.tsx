import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  selectUser,
  selectCurrentCategory,
  selectCurrentDate,
  selectTheme,
} from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { logOut, toggleTheme } from '../../core/actions/UserActions';
import { PATHES } from '../../constants/constants';
import {
  MenuBlock,
  LinksContainer,
  LinkItem,
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
} from './styles';

const Menu: FC = (): JSX.Element => {
  const user = useTypedSelector(selectUser);
  const category = useTypedSelector(selectCurrentCategory);
  const date = useTypedSelector(selectCurrentDate);
  const creativeTheme = useTypedSelector(selectTheme);
  const dispatch = useDispatch();

  const logOutUser = () => dispatch(logOut());
  const changeTheme = () => dispatch(toggleTheme());

  return (
    <MenuBlock>
      <Link to={PATHES.CALENDAR}>Tracking workout</Link>
      <LinksContainer>
        {!user?.email ? (
          <>
            <LinkItem>
              <Link to={PATHES.REGISTRATION}>Регистрация</Link>
            </LinkItem>
            <LinkItem>
              <Link to={PATHES.SIGN_IN}>Вход</Link>
            </LinkItem>
          </>
        ) : null}
        {user?.email ? (
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
        <CheckBoxWrapper>
          <CheckBox
            id="checkbox"
            type="checkbox"
            onClick={changeTheme}
            defaultChecked={creativeTheme}
          />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </LinksContainer>
    </MenuBlock>
  );
};

export default Menu;
