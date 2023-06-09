import styled from 'styled-components';

export const BestDriversWrapper = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
  border-radius: 6px;
  border: 2px solid ${props => props.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    height: 390px;
  }
`;

export const BestDriversHeading = styled.h2`
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
`;

export const DriversImageList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 480px) {
    justify-content: center;
    column-gap: 100px;
  }

  @media screen and (min-width: 768px) {
    column-gap: 0px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 54px;
  }
`;

export const BestDriverName = styled.h3`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;

export const SecondDriverListItem = styled.li`
  width: 98px;
  color: ${props => props.theme.colors.secondPlace};

  @media screen and (min-width: 768px) {
    width: 171px;
  }

  @media screen and (min-width: 1280px) {
    width: 191px;
  }
`;

export const ThirdDriverListItem = styled.li`
  width: 98px;
  color: ${props => props.theme.colors.thirdPlace};

  @media screen and (min-width: 768px) {
    width: 171px;
  }

  @media screen and (min-width: 1280px) {
    width: 191px;
  }
`;

export const WinnerListItem = styled.li`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  width: 112px;
  color: ${props => props.theme.colors.firstPlace};

  @media screen and (min-width: 768px) {
    width: 191px;
  }

  @media screen and (min-width: 1280px) {
    width: 218px;
  }
`;

export const DriverImage = styled.img`
  width: 100%;
`;

export const PointsList = styled.ul`
  position: absolute;
  bottom: -10%;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (min-width: 480px) {
    justify-content: center;
    column-gap: 5px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 30px;
  }
`;

export const WinnerPoinstListItem = styled.li`
  width: 85px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 40px;
  color: ${props => props.theme.colors.firstPlace};
  background-color: ${props => props.theme.colors.primary};

  @media screen and (min-width: 480px) {
    width: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 80px;
    font-size: 40px;
  }
`;

export const SecondPlaceListItem = styled.li`
  width: 75px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 25px;
  color: ${props => props.theme.colors.secondPlace};
  background-color: ${props => props.theme.colors.primary};

  @media screen and (min-width: 480px) {
    width: 90px;
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 60px;
    font-size: 34px;
  }
`;

export const ThirdPlaceListItem = styled.li`
  width: 75px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 25px;
  color: ${props => props.theme.colors.thirdPlace};
  background-color: ${props => props.theme.colors.primary};

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 60px;
    font-size: 34px;
  }
`;
