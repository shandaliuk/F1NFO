import { BestDrivers } from 'components/LastRaceSection/BestDrivers/BestDrivers';
import { WorstDrivers } from 'components/LastRaceSection/WorstDrivers/WorstDrivers';
import { BestAndWorstTeam } from '../BestAndWorstTeam/BestAndWorstTeam';
import { ResultsWrapper } from './LastRaceResults.styled';

export const LastRaceResults = ({ lastRaceResults }) => {
  return (
    <ResultsWrapper>
      <BestDrivers results={lastRaceResults.Results} />
      <div>
        <WorstDrivers results={lastRaceResults.Results} />
        <BestAndWorstTeam lastRaceResults={lastRaceResults} />
      </div>
    </ResultsWrapper>
  );
};
