import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 10px 30px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: ${(props) => props.theme.exercises_list.text_color};
  cursor: pointer;

  border-top: 1px solid ${(props) => props.theme.exercises_list.border_color};
  border-bottom: 1px solid ${(props) => props.theme.exercises_list.border_color};

  margin: 20px;
  padding: 15px;

  img {
    width: 130px;
  }
`;

export const ImageBlock = styled.div`
  max-width: 65px;
  overflow: hidden;
`;

export const Title = styled.p`
  font-size: 18px;

  margin-bottom: 5px;
`;

export const Description = styled.p`
  color: #c4c4c4;
  font-size: 14px;

  margin-bottom: 5px;
`;
