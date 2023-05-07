import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  padding: 20px 0;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const HamburgerIcon = styled(GiHamburgerMenu)`
  width: 25px;
  height: 25px;
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: fixed;
  top: 25px;
  right: 25px;
  width: 25px;
  height: 30px;
  z-index: 11;
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.tertiary};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LinksList = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.primary};
  z-index: 10;

  &.active {
    display: flex;
  }

  &.inactive {
    display: none;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: row;
    column-gap: 40px;

    &.inactive {
      display: flex;
    }
  }
`;

export const NavListLink = styled(NavLink)`
  color: ${props => props.theme.colors.tertiary};
  font-size: 24px;
  text-shadow: ${props => props.theme.shadows.text};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
