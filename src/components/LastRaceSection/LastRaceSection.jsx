import { LastRaceBanner } from 'components/LastRaceSection/LastRaceBanner/LastRaceBanner';
import { LastRaceResults } from 'components/LastRaceSection/LastRaceResults/LastRaceResults';
import { PreviousRaceSection, LastRaceWrapper } from './LastRaceSection.styled';

export const LastRaceSection = ({ lastRaceResults }) => {
  return (
    <PreviousRaceSection>
      <LastRaceWrapper>
        <LastRaceBanner country={lastRaceResults.Circuit.Location.country} />
        <LastRaceResults results={lastRaceResults.Results} />
      </LastRaceWrapper>
    </PreviousRaceSection>
  );
};
