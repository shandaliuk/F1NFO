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

export const HighestWrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 30px;

  @media screen and (min-width: 500px) {
    height: 450px;
    width: 100%;
    padding: 30px;
  }
`;

export const InnerTitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-weight: 300;
`;

export const MobileInnerTitle = styled.p`
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
  }
`;

export const MobileInnerTitleInvert = styled.p`
  display: block;

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const HighestInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HomeBoxTop = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.secondary};
  position: relative;
  margin-bottom: 60px;

  @media screen and (min-width: 500px) {
    width: 49%;
  }

  @media screen and (min-width: 1000px) {
    height: 100%;
  }
`;

export const HomeBoxBottom = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 6px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 2fr;
  grid-gap: 20px;

  @media screen and (min-width: 500px) {
    width: 49%;
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
  background-color: #01192b;
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
  color: white;
  line-height: 1;
`;

export const BottomDriver = styled.div`
  height: auto;
  width: 100%;
  background-color: #01192b;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;

  @media screen and (min-width: 500px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const LoserDriverImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #ebebe6;
  object-fit: contain;

  @media screen and (min-width: 500px) {
    width: 42px;
    height: 42px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  left: 60px;
`;

export const Subname = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: #f0f0f0;
  cursor: inherit;
  margin-right: 15px;

  @media screen and (min-width: 500px) {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Subheader = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: #f0f0f0;
  cursor: inherit;
  margin-right: 15px;

  @media screen and (min-width: 500px) {
    font-weight: 500;
    font-size: 12px;
  }
`;

export const RecentPoints = styled.div`
  right: 15px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  @media screen and (min-width: 500px) {
    right: 30px;
  }

  &.constructor {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 0px;
  }
`;

export const BottomContructor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const ConstructorInner = styled.div`
  background-color: #01192b;
  border-radius: 6px;
  padding: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 500px) {
    padding: 30px;
  }
`;

export const NameInner = styled.div`
  text-transform: uppercase;
  color: #adadad;
  font-size: 10px;

  right: 15px;
  position: absolute;
  top: 50%;
  z-index: 6;
  font-family: 'Lexend', sans-serif;
  font-weight: 300;
  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);

  @media screen and (min-width: 500px) {
    font-size: 12px;
    right: 20px;
  }
`;

export const NameVertical = styled.p`
  writing-mode: vertical-lr;
`;

export const HomeConstructorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeConstructorImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConstructorName = styled.p`
  margin-right: 0px;
  font-size: 14px;
  font-weight: 300;
  color: #f0f0f0;
  cursor: pointer;
`;
