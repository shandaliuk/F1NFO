import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Container } from 'components/Container/Container';
import { Navigation, HeaderButton, LinksList } from './Header.styled';

export const Header = () => {
  const [isOpen, setOpening] = useState(false);

  const handleClick = () => setOpening(!isOpen);

  return (
    <header>
      <Container>
        <Navigation>
          <p>Logo</p>
          {isOpen ? (
            <HeaderButton type="button" onClick={handleClick}>
              <AiOutlineClose />
            </HeaderButton>
          ) : (
            <HeaderButton type="button" onClick={handleClick}>
              <GiHamburgerMenu />
            </HeaderButton>
          )}
          <LinksList className={isOpen ? 'active' : 'inactive'}>
            <li>Schedule</li>
            <li>Drivers & Teams</li>
            <li>Standings</li>
          </LinksList>
        </Navigation>
      </Container>
    </header>
  );
};
