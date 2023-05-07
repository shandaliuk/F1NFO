import { useTheme } from 'styled-components';
import { getImageLink } from 'services/images/getImageLink';
import { BestWorstConstructor } from 'components/LastRaceSection/BestAndWorstTeam/BestAndWorstTeam';
import {
  HomeBoxBottom,
  BottomDriver,
  LoserDriverImage,
  NameWrapper,
  Subname,
  Subheader,
  RecentPoints,
  MainPoints,
} from './WorstDrivers.styled';

export const WorstDrivers = ({ lastRaceResults }) => {
  const theme = useTheme();

  return (
    <HomeBoxBottom>
      <BottomDriver
        style={{
          border: `2px solid ${
            theme.colors.teams[
              lastRaceResults.Results[19].Constructor.constructorId
            ]
          }`,
        }}
      >
        <div>
          <LoserDriverImage
            src={getImageLink({
              type: 'driver',
              query: lastRaceResults.Results[19].Driver.driverId,
            })}
            alt={lastRaceResults.Results[19].Driver.familyName}
            style={{
              border: `2px solid ${
                theme.colors.teams[
                  lastRaceResults.Results[19].Constructor.constructorId
                ]
              }`,
            }}
          />
        </div>
        <NameWrapper>
          <Subname>
            {lastRaceResults.Results[19].Driver.givenName +
              ' ' +
              lastRaceResults.Results[19].Driver.familyName}
          </Subname>
          <Subheader>{lastRaceResults.Results[19].position + 'th'}</Subheader>
        </NameWrapper>
        <RecentPoints>
          <MainPoints>{lastRaceResults.Results[19].points}</MainPoints>
        </RecentPoints>
      </BottomDriver>
      <BottomDriver
        style={{
          border: `2px solid ${
            theme.colors.teams[
              lastRaceResults.Results[18].Constructor.constructorId
            ]
          }`,
        }}
      >
        <div>
          <LoserDriverImage
            src={getImageLink({
              type: 'driver',
              query: lastRaceResults.Results[18].Driver.driverId,
            })}
            alt={lastRaceResults.Results[18].Driver.familyName}
            style={{
              border: `2px solid ${
                theme.colors.teams[
                  lastRaceResults.Results[18].Constructor.constructorId
                ]
              }`,
            }}
          />
        </div>
        <NameWrapper>
          <Subname>
            {lastRaceResults.Results[18].Driver.givenName +
              ' ' +
              lastRaceResults.Results[18].Driver.familyName}
          </Subname>
          <Subheader>{lastRaceResults.Results[18].position + 'th'}</Subheader>
        </NameWrapper>
        <RecentPoints>
          <MainPoints>{lastRaceResults.Results[18].points}</MainPoints>
        </RecentPoints>
      </BottomDriver>
      <BottomDriver
        style={{
          border: `2px solid ${
            theme.colors.teams[
              lastRaceResults.Results[17].Constructor.constructorId
            ]
          }`,
        }}
      >
        <div>
          <LoserDriverImage
            src={getImageLink({
              type: 'driver',
              query: lastRaceResults.Results[17].Driver.driverId,
            })}
            alt={lastRaceResults.Results[17].Driver.familyName}
            style={{
              border: `2px solid ${
                theme.colors.teams[
                  lastRaceResults.Results[17].Constructor.constructorId
                ]
              }`,
            }}
          />
        </div>
        <NameWrapper>
          <Subname>
            {lastRaceResults.Results[17].Driver.givenName +
              ' ' +
              lastRaceResults.Results[17].Driver.familyName}
          </Subname>
          <Subheader>{lastRaceResults.Results[17].position + 'th'}</Subheader>
        </NameWrapper>
        <RecentPoints>
          <MainPoints>{lastRaceResults.Results[17].points}</MainPoints>
        </RecentPoints>
      </BottomDriver>
    </HomeBoxBottom>
  );
};
