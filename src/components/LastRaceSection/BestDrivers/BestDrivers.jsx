import { useTheme } from 'styled-components';
import { getImageLink } from 'services/images/getImageLink';
import {
  BestDriversWrapper,
  BestDriversHeading,
  DriversImageList,
  WinnerListItem,
  SecondDriverListItem,
  ThirdDriverListItem,
  BestDriverName,
  DriverImage,
  PointsList,
  WinnerPoinstListItem,
  SecondPlaceListItem,
  ThirdPlaceListItem,
} from './BestDrivers.styled';

export const BestDrivers = ({ results }) => {
  const theme = useTheme();

  return (
    <div>
      <BestDriversHeading>Top Scorers</BestDriversHeading>
      <BestDriversWrapper>
        <DriversImageList>
          <SecondDriverListItem>
            <BestDriverName>{results[1].Driver.familyName}</BestDriverName>
            <DriverImage
              src={getImageLink({
                type: 'driver',
                query: results[1].Driver.driverId,
              })}
              alt={results[1].Driver.familyName}
            />
          </SecondDriverListItem>
          <WinnerListItem>
            <BestDriverName>{results[0].Driver.familyName}</BestDriverName>
            <DriverImage
              src={getImageLink({
                type: 'driver',
                query: results[0].Driver.driverId,
              })}
              alt={results[0].Driver.familyName}
            />
          </WinnerListItem>
          <ThirdDriverListItem>
            <BestDriverName>{results[2].Driver.familyName}</BestDriverName>
            <DriverImage
              src={getImageLink({
                type: 'driver',
                query: results[2].Driver.driverId,
              })}
              alt={results[2].Driver.familyName}
            />
          </ThirdDriverListItem>
        </DriversImageList>
        <PointsList>
          <SecondPlaceListItem
            style={{
              border: `2px solid ${
                theme.colors.teams[results[1].Constructor.constructorId]
              }`,
            }}
          >
            {results[1].points}
          </SecondPlaceListItem>
          <WinnerPoinstListItem
            style={{
              border: `2px solid ${
                theme.colors.teams[results[0].Constructor.constructorId]
              }`,
            }}
          >
            {results[0].points}
          </WinnerPoinstListItem>
          <ThirdPlaceListItem
            style={{
              border: `2px solid ${
                theme.colors.teams[results[2].Constructor.constructorId]
              }`,
            }}
          >
            {results[2].points}
          </ThirdPlaceListItem>
        </PointsList>
      </BestDriversWrapper>
    </div>
  );
};
