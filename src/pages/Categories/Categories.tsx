import React, { useEffect, FC } from 'react';
import styled from 'styled-components';
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
import { CURRENT_THEME } from '../../styles/themes';

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 90%;
  margin: auto;
`;

const CategoriesItem = styled.div`
  width: 520px;
  height: 270px;
  margin: 30px;
  padding: 6% 0px;

  border: 2px solid #000000;
  border-radius: 10px;

  background-image: url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/woman-works-out-at-home-royalty-free-image-1617639949.');
  background-size: cover;
`;

const Title = styled.p`
  display: block;

  background-color: rgba(255, 255, 255, 0.8);

  font-size: 40px;
  text-align: center;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: ${CURRENT_THEME.main_color};
    cursor: pointer;
  }
`;

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
              <CategoriesItem
                key={category.id}
                onClick={chooseCategory(category)}
              >
                <Title>{category.title}</Title>
              </CategoriesItem>
            );
          })
        : null}
    </CategoriesContainer>
  );
};

export default Categories;
