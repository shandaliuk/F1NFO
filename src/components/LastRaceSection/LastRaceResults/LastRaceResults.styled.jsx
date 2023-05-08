import styled from 'styled-components';

export const ResultsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 15px;
  }
`;

export const TeamsAndDriversWrapper = styled.div`
  width: 100%;
`;
