import React, { useEffect, FC } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { Category } from '../../core/interfaces/WorkoutInterfaces';
import {
  setCategoryAction,
  getCategories,
} from '../../core/actions/WorkoutActions';
import { selectAllCategories } from '../../core/selectors/selectors';
import { PATHES } from '../../constants/constants';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { CategoriesContainer, Item, Title } from './styles';

const Categories: FC = (): JSX.Element => {
  const arrOfCategories = useTypedSelector(selectAllCategories);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const chooseCategory = (category: Category) => () => {
    dispatch(setCategoryAction(category));
    history.push(PATHES.EXERCISES_LIST);
  };

  return (
    <CategoriesContainer>
      {arrOfCategories && arrOfCategories.length !== 0
        ? arrOfCategories.map((category: Category) => {
            return (
              <Item key={category?.id} onClick={chooseCategory(category)}>
                <Title>{category?.title}</Title>
              </Item>
            );
          })
        : null}
    </CategoriesContainer>
  );
};

export default Categories;
