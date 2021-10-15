import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 90%;
  margin: auto;
`;

export const Item = styled.div`
  width: 520px;
  height: 270px;
  margin: 30px;
  padding: 6% 0px;

  border: 2px solid ${(prop) => prop.theme.categories.item_border};
  border-radius: 10px;

  background-image: url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/woman-works-out-at-home-royalty-free-image-1617639949.');
  background-size: cover;
`;

export const Title = styled.p`
  display: block;

  background-color: ${(prop) => prop.theme.categories.title_background};

  font-size: 40px;
  text-align: center;
  color: ${(prop) => prop.theme.categories.text_color};
  text-decoration: none;

  &:hover {
    color: ${(prop) => prop.theme.categories.text_hover};
    cursor: pointer;
  }
`;
