import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

export const SiteFooter = styled.footer`
  font-size: 16px;
  padding-bottom: 3rem;
  text-align: center;
  font-weight: 300;
  padding-left: 30px;
  padding-right: 30px;
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  padding: 0 1em;
  position: relative;
`;

export const FooterNavigation = styled.nav`
  padding-top: 60px;
`;

export const FooterLinks = styled.ul`
  margin: 20px auto 0;
  max-width: 29.03em;
  display: block;
  font-size: 17px;
  line-height: 34px;

  @media screen and (min-width: 468px) {
    margin: 40px auto 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.tertiary};
  transition: color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const FooterMessage = styled.p`
  margin-top: 30px;

  @media screen and (min-width: 468px) {
    margin-top: 50px;
  }
`;

export const AuthorLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  transition: color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
