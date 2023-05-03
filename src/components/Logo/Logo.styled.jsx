import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: block;
  width: 123px;
  height: 40px;
  letter-spacing: 1px;
  z-index: 11;
  color: ${props => props.theme.colors.tertiary};
  transition: color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: 992px) {
    width: 185px;
    height: 60px;
  }
`;

export const LogoIcon = styled.svg`
  width: 100%;
  height: 100%;
`;
