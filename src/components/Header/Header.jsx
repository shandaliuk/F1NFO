import { useState } from 'react';
import { Logo } from 'components/Logo/Logo';
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
      <Navigation>
        <Logo />
        {isOpen ? (
          <HeaderButton type="button" onClick={handleClick}>
            <CloseIcon />
          </HeaderButton>
        ) : (
          <HeaderButton type="button" onClick={handleClick}>
            <HamburgerIcon />
          </HeaderButton>
        )}
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
    </PageHeader>
  );
};
