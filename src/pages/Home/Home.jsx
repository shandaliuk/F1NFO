import { useGetLastRaceResultsQuery } from 'services/formulaOneApi/formulaOneApi';
import { Container } from 'components/SharedLayout/Container/Container';
import { LastRaceSection } from 'components/LastRaceSection/LastRaceSection';
import { NextRaceSection } from 'components/NextRaceSection/NextRaceSection';
import { CurrentStandingsSection } from 'components/CurrentStandingsSection/CurrentStandingsSection';
import {
  HomeSectionsWrapper,
  LastRaceInfoWrapper,
  NextRaceAndStandingsWrapper,
} from './Home.styled';

export const Home = () => {
  const {
    data: lastRaceResultsObj,
    isLoading,
    isError,
  } = useGetLastRaceResultsQuery();

  return (
    !isLoading &&
    !isError && (
      <main>
        <Container>
          <HomeSectionsWrapper>
            <LastRaceInfoWrapper>
              <LastRaceSection
                lastRaceResults={lastRaceResultsObj.MRData.RaceTable.Races[0]}
              />
              <section>Overview</section>
            </LastRaceInfoWrapper>
            <NextRaceAndStandingsWrapper>
              <NextRaceSection />
              <CurrentStandingsSection />
            </NextRaceAndStandingsWrapper>
          </HomeSectionsWrapper>
        </Container>
      </main>
    )
  );
};
