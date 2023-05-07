import { useState } from 'react';
import { useGetLastRaceResultsQuery } from 'services/formulaOneApi/formulaOneApi';
import { CurrentRaceBanner } from 'components/CurrentRaceBanner/CurrentRaceBanner';
import { MainLastRaceResults } from 'components/MainLastRaceResults/MainLastRaceResults';
import { RaceOverviewTable } from 'components/RaceOverviewTable/RaceOverviewTable';
import { PageMain, MainSectionWrapper } from './Home.styled';

export const Home = () => {
  const [lastRaceResults, setLastRaceResults] = useState(null);

  const {
    data: lastRaceResultsObj,
    isLoading,
    isError,
  } = useGetLastRaceResultsQuery();

  if (!isLoading && !isError && !lastRaceResults) {
    setLastRaceResults(lastRaceResultsObj.MRData.RaceTable.Races[0]);
  }

  return (
    !isLoading &&
    !isError &&
    lastRaceResults && (
      <PageMain>
        <MainSectionWrapper>
          <section>
            <CurrentRaceBanner
              country={lastRaceResults.Circuit.Location.country}
            />
            <MainLastRaceResults lastRaceResults={lastRaceResults} />
            <RaceOverviewTable results={lastRaceResults.Results} />
          </section>
        </MainSectionWrapper>
      </PageMain>
    )
  );
};
