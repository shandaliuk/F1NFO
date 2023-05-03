import { useState } from 'react';
import { useGetLastRaceResultsQuery } from 'services/formulaOneApi/formulaOneApi';

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
      <main>
        <section>
          <div>{lastRaceResults.Circuit.Location.country} results</div>
        </section>
      </main>
    )
  );
};
