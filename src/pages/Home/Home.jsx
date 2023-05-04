import { useState } from 'react';
import { useGetLastRaceResultsQuery } from 'services/formulaOneApi/formulaOneApi';
import { getImageLink } from 'services/images/getImageLink';
import {
  PageMain,
  MainSectionWrapper,
  CurrentRaceWrapper,
  CurrentRaceImage,
  CurrentRaceTitle,
} from './Home.styled';

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
            {/* Component */}
            <CurrentRaceWrapper>
              <CurrentRaceImage
                style={{
                  backgroundImage: `url(${getImageLink({
                    type: 'country',
                    query: lastRaceResults.Circuit.Location.country,
                  })})`,
                }}
              >
                <CurrentRaceTitle>
                  {lastRaceResults.Circuit.Location.country} results
                </CurrentRaceTitle>
              </CurrentRaceImage>
            </CurrentRaceWrapper>
            {/* Component */}
            {/* Component */}
          </section>
        </MainSectionWrapper>
      </PageMain>
    )
  );
};
