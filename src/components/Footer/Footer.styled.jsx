import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLinksList = styled.ul`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 20px;
    justify-content: center;
  }
`;

export const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  transition: color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const FooterInfo = styled.p`
  text-align: center;
  padding-bottom: 20px;
`;

export const AuthorLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  transition: color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
