import styled from 'styled-components';

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

export const BottomDriver = styled.div`
  height: auto;
  width: 100%;
  background-color: transparent;
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
  background-color: transparent;
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
  color: ${props => props.theme.colors.tertiary};
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
  color: ${props => props.theme.colors.secondary};
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
`;

export const MainPoints = styled.p`
  font-weight: 500;
  font-size: 34px;
  color: ${props => props.theme.colors.tertiary};
  line-height: 1;
`;
