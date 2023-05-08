import { Logo } from 'components/Logo/Logo';
import { Container } from 'components/Container/Container';
import {
  FooterLinksList,
  FooterInfo,
  FooterLogoWrapper,
  AuthorLink,
  FooterLink,
} from './Footer.styled';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <nav>
          <FooterLogoWrapper>
            <Logo />
          </FooterLogoWrapper>
          <FooterLinksList>
            <li>
              <FooterLink to="schedule">Schedule</FooterLink>
            </li>
            <li>
              <FooterLink to="drivers-teams">Drivers & Teams</FooterLink>
            </li>
            <li>
              <FooterLink to="standings">Standings</FooterLink>
            </li>
          </FooterLinksList>
        </nav>
        <FooterInfo>
          Developed by <AuthorLink>shandaliuk</AuthorLink>
        </FooterInfo>
      </Container>
    </footer>
  );
};
