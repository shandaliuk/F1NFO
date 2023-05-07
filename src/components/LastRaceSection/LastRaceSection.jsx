import { Container } from 'components/Container/Container';
import { LastRaceBanner } from 'components/LastRaceSection/LastRaceBanner/LastRaceBanner';
import { LastRaceResults } from 'components/LastRaceSection/LastRaceResults/LastRaceResults';

export const LastRaceSection = ({ lastRaceResults }) => {
  return (
    <section>
      <Container>
        <LastRaceBanner country={lastRaceResults.Circuit.Location.country} />
        <LastRaceResults lastRaceResults={lastRaceResults} />
      </Container>
    </section>
  );
};
