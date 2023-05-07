import styled from 'styled-components';

export const BannerBackground = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-position: left;
`;

export const BannerTitle = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.tertiary};
  text-shadow: ${props => props.theme.shadows.stroke};

  @media screen and (min-width: 480px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 50px;
  }
`;
