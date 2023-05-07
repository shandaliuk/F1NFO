import styled from 'styled-components';

export const CurrentRaceWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;

export const CurrentRaceBackground = styled.div`
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 80px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.tertiary};
  font-size: 20px;
  text-align: center;

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
