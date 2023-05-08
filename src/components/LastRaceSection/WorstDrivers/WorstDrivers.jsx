import { useTheme } from 'styled-components';
import { getImageLink } from 'services/images/getImageLink';
import {
  WorstDriversWrapper,
  WorstDriversHeading,
  WorstDriversList,
  WorstDriversListItem,
  WorstDriverImage,
  DriverName,
  DriverPosition,
  DriverPoints,
} from './WorstDrivers.styled';

export const WorstDrivers = ({ results }) => {
  const theme = useTheme();

  return (
    <WorstDriversWrapper>
      <WorstDriversHeading>Bottom scorers</WorstDriversHeading>
      <div>
        <WorstDriversList>
          <WorstDriversListItem
            style={{
              border: `2px solid ${
                theme.colors.teams[results[19].Constructor.constructorId]
              }`,
            }}
          >
            <WorstDriverImage
              src={getImageLink({
                type: 'driver',
                query: results[19].Driver.driverId,
              })}
              alt={results[19].Driver.familyName}
              style={{
                border: `2px solid ${
                  theme.colors.teams[results[19].Constructor.constructorId]
                }`,
              }}
            />
            <div>
              <DriverName>
                {results[19].Driver.givenName +
                  ' ' +
                  results[19].Driver.familyName}
              </DriverName>
              <DriverPosition>{results[19].position + 'th'}</DriverPosition>
            </div>
            <DriverPoints>{results[19].points}</DriverPoints>
          </WorstDriversListItem>
          <WorstDriversListItem
            style={{
              border: `2px solid ${
                theme.colors.teams[results[18].Constructor.constructorId]
              }`,
            }}
          >
            <WorstDriverImage
              src={getImageLink({
                type: 'driver',
                query: results[18].Driver.driverId,
              })}
              alt={results[18].Driver.familyName}
              style={{
                border: `2px solid ${
                  theme.colors.teams[results[18].Constructor.constructorId]
                }`,
              }}
            />
            <div>
              <DriverName>
                {results[18].Driver.givenName +
                  ' ' +
                  results[18].Driver.familyName}
              </DriverName>
              <DriverPosition>{results[18].position + 'th'}</DriverPosition>
            </div>
            <DriverPoints>{results[18].points}</DriverPoints>
          </WorstDriversListItem>
          <WorstDriversListItem
            style={{
              border: `2px solid ${
                theme.colors.teams[results[17].Constructor.constructorId]
              }`,
            }}
          >
            <WorstDriverImage
              src={getImageLink({
                type: 'driver',
                query: results[17].Driver.driverId,
              })}
              alt={results[17].Driver.familyName}
              style={{
                border: `2px solid ${
                  theme.colors.teams[results[17].Constructor.constructorId]
                }`,
              }}
            />
            <div>
              <DriverName>
                {results[17].Driver.givenName +
                  ' ' +
                  results[17].Driver.familyName}
              </DriverName>
              <DriverPosition>{results[17].position + 'th'}</DriverPosition>
            </div>
            <DriverPoints>{results[17].points}</DriverPoints>
          </WorstDriversListItem>
        </WorstDriversList>
      </div>
    </WorstDriversWrapper>
  );
};
