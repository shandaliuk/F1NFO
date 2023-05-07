import { useTheme } from 'styled-components';
import { getImageLink } from 'services/images/getImageLink';
import {
  HomeBoxTop,
  ImagesWrapper,
  HomeDriverImage,
  TopScorerBox,
  TopScorerBoxWrapper,
  MainPoints,
} from './TopResults.styled';

export const TopResults = ({ lastRaceResults }) => {
  const theme = useTheme();

  return (
    <HomeBoxTop>
      <ImagesWrapper>
        <HomeDriverImage
          src={getImageLink({
            type: 'driver',
            query: lastRaceResults.Results[1].Driver.driverId,
          })}
          alt={lastRaceResults.Results[1].Driver.familyName}
          style={{ position: 'absolute', left: 0 }}
        />
        <HomeDriverImage
          src={getImageLink({
            type: 'driver',
            query: lastRaceResults.Results[0].Driver.driverId,
          })}
          alt={lastRaceResults.Results[0].Driver.familyName}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 5,
            height: '80%',
            margin: 'auto',
          }}
        />
        <HomeDriverImage
          src={getImageLink({
            type: 'driver',
            query: lastRaceResults.Results[2].Driver.driverId,
          })}
          alt={lastRaceResults.Results[2].Driver.familyName}
          style={{ position: 'absolute', right: 0 }}
        />
        <TopScorerBoxWrapper>
          <TopScorerBox
            style={{
              border: `2px solid ${
                theme.colors.teams[
                  lastRaceResults.Results[1].Constructor.constructorId
                ]
              }`,
            }}
          >
            <MainPoints>{lastRaceResults.Results[1].points}</MainPoints>
          </TopScorerBox>
          <TopScorerBox
            className="winner"
            style={{
              border: `2px solid ${
                theme.colors.teams[
                  lastRaceResults.Results[0].Constructor.constructorId
                ]
              }`,
            }}
          >
            <MainPoints>{lastRaceResults.Results[0].points}</MainPoints>
          </TopScorerBox>
          <TopScorerBox
            style={{
              border: `2px solid ${
                theme.colors.teams[
                  lastRaceResults.Results[2].Constructor.constructorId
                ]
              }`,
            }}
          >
            <MainPoints>{lastRaceResults.Results[2].points}</MainPoints>
          </TopScorerBox>
        </TopScorerBoxWrapper>
      </ImagesWrapper>
    </HomeBoxTop>
  );
};
