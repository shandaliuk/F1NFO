import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.tertiary};
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.tertiary};
`;

export const LinksList = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: ${props => props.theme.colors.primary};
`;
