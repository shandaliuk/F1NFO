import { useGetLastRaceResultsQuery } from 'services/formulaOneApi/formulaOneApi';
import { LastRaceSection } from 'components/LastRaceSection/LastRaceSection';

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
        <LastRaceSection
          lastRaceResults={lastRaceResultsObj.MRData.RaceTable.Races[0]}
        />
      </main>
    )
  );
};
