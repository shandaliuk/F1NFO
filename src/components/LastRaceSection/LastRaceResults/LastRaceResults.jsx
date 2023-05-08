import { BestDrivers } from 'components/LastRaceSection/BestDrivers/BestDrivers';
import { WorstDrivers } from 'components/LastRaceSection/WorstDrivers/WorstDrivers';
import { BestAndWorstTeam } from '../BestAndWorstTeam/BestAndWorstTeam';
import {
  ResultsWrapper,
  TeamsAndDriversWrapper,
} from './LastRaceResults.styled';

export const LastRaceResults = ({ results }) => {
  return (
    <ResultsWrapper>
      <BestDrivers results={results} />
      <TeamsAndDriversWrapper>
        <WorstDrivers results={results} />
        <BestAndWorstTeam results={results} />
      </TeamsAndDriversWrapper>
    </ResultsWrapper>
  );
};
