import { Container } from 'components/Container/Container';
import { LastRaceBanner } from 'components/LastRaceSection/LastRaceBanner/LastRaceBanner';
import { LastRaceResults } from 'components/LastRaceSection/LastRaceResults/LastRaceResults';
import { PreviousRaceSection } from './LastRaceSection.styled';

export const LastRaceSection = ({ lastRaceResults }) => {
  return (
    <PreviousRaceSection>
      <Container>
        <LastRaceBanner country={lastRaceResults.Circuit.Location.country} />
        <LastRaceResults results={lastRaceResults.Results} />
      </Container>
    </PreviousRaceSection>
  );
};
