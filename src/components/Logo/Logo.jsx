import sprite from 'images/sprite.svg';
import { LogoLink, LogoIcon } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoLink>
      <LogoIcon>
        <use href={sprite + '#icon-logo'}></use>
      </LogoIcon>
    </LogoLink>
  );
};
