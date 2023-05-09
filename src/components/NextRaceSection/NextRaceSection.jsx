import { useState } from 'react';
import { parse, format } from 'date-fns';
import { useGetNextRaceInfoQuery } from 'services/formulaOneApi/formulaOneApi';
import { getImageLink } from 'services/images/getImageLink';
import {
  FutureRaceSection,
  NextRaceHeading,
  NameAndFlagWrapper,
  NextRaceFlagImage,
  NextRaceCountryName,
  DateWrapper,
  NextRaceCalandar,
  NextRaceDate,
} from './NextRaceSection.styled';

export const NextRaceSection = () => {
  const { data, isLoading, isError } = useGetNextRaceInfoQuery();

  const [nextRace, setNextRace] = useState(null);

  if (!isLoading && !isError && !nextRace) {
    setNextRace(data.MRData.RaceTable.Races[0]);
  }

  return (
    !isLoading &&
    !isError &&
    nextRace && (
      <FutureRaceSection>
        <NextRaceHeading>Up Next</NextRaceHeading>
        <NameAndFlagWrapper>
          <NextRaceFlagImage
            src={getImageLink({
              type: 'countryMini',
              query: nextRace.Circuit.Location.country,
            })}
            alt={`${nextRace.Circuit.Location.country} flag`}
          />
          <NextRaceCountryName>
            {nextRace.Circuit.Location.country}
          </NextRaceCountryName>
        </NameAndFlagWrapper>
        <DateWrapper>
          <NextRaceCalandar />
          <NextRaceDate>
            {format(
              parse(nextRace.FirstPractice.date, 'yyyy-MM-dd', new Date()),
              'dd'
            ) +
              ' - ' +
              format(parse(nextRace.date, 'yyyy-MM-dd', new Date()), 'dd MMMM')}
          </NextRaceDate>
        </DateWrapper>
      </FutureRaceSection>
    )
  );
};
