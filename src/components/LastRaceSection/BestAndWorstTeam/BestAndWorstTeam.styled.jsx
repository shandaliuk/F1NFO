import styled from 'styled-components';

export const BottomContructor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const ConstructorInner = styled.div`
  background-color: transparent;
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
  color: ${props => props.theme.colors.secondary};
  font-size: 10px;

  right: 15px;
  position: absolute;
  top: 50%;
  z-index: 6;
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
  color: ${props => props.theme.colors.tertiary};
  cursor: pointer;
`;

export const RecentPointsConstructor = styled.div`
  right: 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MainPoints = styled.p`
  font-weight: 500;
  font-size: 34px;
  color: ${props => props.theme.colors.tertiary};
  line-height: 1;
`;
