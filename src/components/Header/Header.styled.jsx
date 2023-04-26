import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export const PageHeader = styled.header`
  max-width: 1376px;
  padding: 20px 30px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  width: 100%;
  font-weight: 300;

  @media screen and (min-width: 992px) {
    padding: 30px 60px;
  }
`;

export const HamburgerIcon = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;
  display: inherit;
  position: relative;
  z-index: 11;
`;

export const CloseIcon = styled(AiOutlineClose)`
  width: 30px;
  height: 30px;
  display: inherit;
  position: relative;
  z-index: 11;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: inherit;
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.tertiary};

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.tertiary};

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const LinksList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #030a18;
  z-index: 10;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 0px;
  row-gap: 20px;
  height: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.primary};

  &.active {
    display: flex;
  }

  &.inactive {
    display: none;
  }

  @media screen and (min-width: 992px) {
    position: relative;
    flex-direction: row;
    column-gap: 40px;

    &.active {
      display: flex;
    }

    &.inactive {
      display: flex;
    }
  }
`;

export const NavListLink = styled.div`
  font-size: 24px;
  display: inline-block;
  font-weight: 400;

  @media screen and (min-width: 992px) {
    font-size: 16px;
  }
`;
