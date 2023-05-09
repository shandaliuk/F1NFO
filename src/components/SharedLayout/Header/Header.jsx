import { useState } from 'react';
import { Container } from 'components/SharedLayout/Container/Container';
import { Logo } from 'components/SharedLayout/Logo/Logo';
import {
  PageHeader,
  Navigation,
  HeaderButton,
  LinksList,
  HamburgerIcon,
  CloseIcon,
  NavListLink,
} from './Header.styled';

export const Header = () => {
  const [isOpen, setOpening] = useState(false);

  const handleClick = () => setOpening(!isOpen);

  return (
    <PageHeader>
      <Container>
        <Navigation>
          <Logo />
          <HeaderButton type="button" onClick={handleClick}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </HeaderButton>
          <LinksList className={isOpen ? 'active' : 'inactive'}>
            <li>
              <NavListLink to="schedule">Schedule</NavListLink>
            </li>
            <li>
              <NavListLink to="standings">Standings</NavListLink>
            </li>
            <li>
              <NavListLink to="drivers-teams">Drivers & Teams</NavListLink>
            </li>
          </LinksList>
        </Navigation>
      </Container>
    </PageHeader>
  );
};
