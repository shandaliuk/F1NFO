import { Logo } from 'components/Logo/Logo';
import {
  SiteFooter,
  FooterContainer,
  FooterNavigation,
  LogoWrapper,
  FooterLinks,
  FooterMessage,
  AuthorLink,
  FooterLink,
} from './Footer.styled';

export const Footer = () => {
  return (
    <SiteFooter>
      <FooterContainer>
        <FooterNavigation>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <FooterLinks>
            <li>
              <FooterLink to="schedule">Schedule</FooterLink>
            </li>
            <li>
              <FooterLink to="drivers-teams">Drivers & Teams</FooterLink>
            </li>
            <li>
              <FooterLink to="standings">Standings</FooterLink>
            </li>
          </FooterLinks>
        </FooterNavigation>
        <FooterMessage>
          Developed by <AuthorLink>shandaliuk</AuthorLink>
        </FooterMessage>
      </FooterContainer>
    </SiteFooter>
  );
};
