import styled from 'styled-components';

import { CURRENT_THEME } from './themes';

export const Input = styled.input`
  display: block;
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;

  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 7px;

  padding: 6px 12px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 3px #96c8fa;
  }
`;

export const Warning = styled.p`
  color: #ff0000;

  margin: 0px;
`;

export const Button = styled.button`
  display: inline-block;
  margin-top: 15px;
  padding: 6px 12px;

  background-color: ${CURRENT_THEME.button_background_color};

  border: 1px solid ${CURRENT_THEME.button_border_color};
  border-radius: 0.25rem;

  font-size: 16px;
  color: ${CURRENT_THEME.button_text_color};
  font-weight: 400;

  &:hover {
    background-color: ${CURRENT_THEME.button_background_hover};
    border-color: ${CURRENT_THEME.button_background_hover};
  }
`;
