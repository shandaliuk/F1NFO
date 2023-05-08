import { BestDrivers } from 'components/LastRaceSection/BestDrivers/BestDrivers';
import { WorstDrivers } from 'components/LastRaceSection/WorstDrivers/WorstDrivers';
import { BestAndWorstTeam } from '../BestAndWorstTeam/BestAndWorstTeam';
import { ResultsWrapper } from './LastRaceResults.styled';

export const LastRaceResults = ({ results }) => {
  return (
    <ResultsWrapper>
      <BestDrivers results={results} />
      <div>
        <WorstDrivers results={results} />
        <BestAndWorstTeam results={results} />
      </div>
    </ResultsWrapper>
  );
};
