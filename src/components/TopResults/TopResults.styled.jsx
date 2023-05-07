import styled from 'styled-components';

export const HomeBoxTop = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  position: relative;
  margin-bottom: 60px;
  border: 2px solid ${props => props.theme.colors.secondary};

  @media screen and (min-width: 500px) {
    width: 49%;
  }

  @media screen and (min-width: 1000px) {
    height: 100%;
  }
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const HomeDriverImage = styled.img`
  height: 70%;
  width: auto;
  position: absolute;
  bottom: 0;
`;

export const TopScorerBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  z-index: 6;
  height: 100%;
`;

export const TopScorerBox = styled.div`
  width: 100px;
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 6px;
  position: relative;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  z-index: 5;

  &.winner {
    z-index: 6;
    width: 110px;
    height: 70px;
  }
`;

export const MainPoints = styled.p`
  font-weight: 500;
  font-size: 34px;
  color: ${props => props.theme.colors.tertiary};
  line-height: 1;
`;
