import styled from 'styled-components';

export const WorstDriversWrapper = styled.div`
  margin-bottom: 30px;
`;

export const WorstDriversHeading = styled.h2`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
`;

export const WorstDriversList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const WorstDriversListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  border-radius: 6px;
`;

export const WorstDriverImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.secondary};
`;

export const DriverName = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

export const DriverPosition = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
`;

export const DriverPoints = styled.p`
  font-size: 25px;
  font-weight: 500;
`;
