import { useGetLastRaceResultsQuery } from 'services/formulaOneApi/formulaOneApi';
import { LastRaceSection } from 'components/LastRaceSection/LastRaceSection';
import { NextRaceSection } from 'components/NextRaceSection/NextRaceSection';
import { HomeMain } from './Home.styled';

export const Home = () => {
  const {
    data: lastRaceResultsObj,
    isLoading,
    isError,
  } = useGetLastRaceResultsQuery();

  return (
    !isLoading &&
    !isError && (
      <HomeMain>
        <div>
          <LastRaceSection
            lastRaceResults={lastRaceResultsObj.MRData.RaceTable.Races[0]}
          />
          <section>Overview</section>
        </div>
        <div>
          <NextRaceSection />
          <section>HomeStandings</section>
        </div>
      </HomeMain>
    )
  );
};
