import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 9999;

  background-color: ${(props) => props.theme.loader.bg_color};
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderItem = styled.div`
  display: block;
  width: 100px;
  height: 100px;

  position: absolute;
  top: 50%;
  left: 50%;

  border: 16px solid ${(props) => props.theme.loader.overlay_color};
  border-top: 16px solid ${(props) => props.theme.loader.spin_color};
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`;
