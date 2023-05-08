import styled from 'styled-components';

export const CarsList = styled.ul`
  display: flex;
  column-gap: 20px;
`;

export const CarsListItem = styled.li`
  position: relative;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    padding: 24px 30px 24px 30px;
  }
`;

export const ConstructorPoints = styled.p`
  font-size: 25px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`;

export const CarImage = styled.img`
  width: 90px;
`;

export const CarCategory = styled.p`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  color: ${props => props.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const ConstructorName = styled.p`
  font-size: 14px;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
