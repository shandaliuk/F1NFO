import styled from 'styled-components';

export const CurrentRaceWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;

export const PageMain = styled.main`
  max-width: 1376px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: row;
`;

export const MainSectionWrapper = styled.div`
  width: 75%;
  border-right: 2px solid ${props => props.theme.colors.secondary};
  margin-top: 30px;
`;

export const CurrentRaceImage = styled.div`
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 80px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Russo One', sans-serif;
  color: white;
  font-size: 20px;
  text-align: center;
  -webkit-text-stroke: 2px #030a18;

  @media screen and (min-width: 468px) {
    font-size: 30px;
  }

  @media screen and (min-width: 820px) {
    font-size: 50px;
  }
`;

export const CurrentRaceTitle = styled.span`
  text-transform: uppercase;
`;
