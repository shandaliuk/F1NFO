import styled from 'styled-components';

export const PreviousRaceSection = styled.section`
  padding-bottom: 100px;
`;

export const LastRaceWrapper = styled.div`
  padding-bottom: 30px;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    padding-bottom: 70px;
  }
`;
