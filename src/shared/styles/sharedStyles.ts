import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.input.textColor};

  background-color: ${(props) => props.theme.input.bgColor};
  border: 1px solid ${(props) => props.theme.input.borderColor};
  border-radius: 7px;

  padding: 6px 12px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 3px ${(props) => props.theme.input.focusColor};
  }
`;

export const Warning = styled.p`
  color: ${(props) => props.theme.warning.textColor};

  margin: 0px;
`;

export const Button = styled.button`
  display: inline-block;
  margin-top: 15px;
  padding: 6px 12px;

  background-color: ${(props) => props.theme.button.bgColor};

  border: 1px solid ${(props) => props.theme.button.borderColor};
  border-radius: 0.25rem;

  font-size: 16px;
  color: ${(props) => props.theme.button.textColor};
  font-weight: 400;

  &:hover {
    background-color: ${(props) => props.theme.button.bgHoverColor};
    border-color: ${(props) => props.theme.button.borderHoverColor};
  }
`;
