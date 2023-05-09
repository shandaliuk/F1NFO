import styled from 'styled-components';

export const HomeSectionsWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const LastRaceInfoWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    flex-grow: 1;
    padding-right: 30px;
    border-right: 2px solid ${props => props.theme.colors.secondary};
  }
`;

export const NextRaceAndStandingsWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    padding-left: 30px;
  }
`;
