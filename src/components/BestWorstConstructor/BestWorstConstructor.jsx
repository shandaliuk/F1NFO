import { useTheme } from 'styled-components';
import { getImageLink } from 'services/images/getImageLink';
import {
  BottomContructor,
  ConstructorInner,
  NameInner,
  NameVertical,
  HomeConstructorImage,
  HomeConstructorWrapper,
  RecentPointsConstructor,
  ConstructorName,
  MainPoints,
} from './BestWorstConstructor.styled';

export const BestWorstConstructor = ({ lastRaceResults }) => {
  const theme = useTheme();

  return (
    <BottomContructor>
      <ConstructorInner
        style={{
          border: `2px solid ${
            theme.colors.teams[
              lastRaceResults.Results[0].Constructor.constructorId
            ]
          }`,
        }}
      >
        <NameInner>
          <NameVertical>First</NameVertical>
        </NameInner>
        <HomeConstructorWrapper>
          <RecentPointsConstructor className="constructor">
            <MainPoints>{lastRaceResults.Results[0].points}</MainPoints>
          </RecentPointsConstructor>
          <HomeConstructorImage
            width="90px"
            height="27px"
            src={getImageLink({
              type: 'car',
              query: lastRaceResults.Results[0].Constructor.constructorId,
            })}
            alt={lastRaceResults.Results[0].Constructor.name}
          />
          <ConstructorName>
            {lastRaceResults.Results[0].Constructor.name}
          </ConstructorName>
        </HomeConstructorWrapper>
      </ConstructorInner>
      <ConstructorInner
        style={{
          border: `2px solid ${
            theme.colors.teams[
              lastRaceResults.Results[19].Constructor.constructorId
            ]
          }`,
        }}
      >
        <NameInner>
          <NameVertical>Last</NameVertical>
        </NameInner>
        <HomeConstructorWrapper>
          <RecentPointsConstructor className="constructor">
            <MainPoints>{lastRaceResults.Results[19].points}</MainPoints>
          </RecentPointsConstructor>
          <HomeConstructorImage
            width="90px"
            height="27px"
            src={getImageLink({
              type: 'car',
              query: lastRaceResults.Results[19].Constructor.constructorId,
            })}
            alt={lastRaceResults.Results[19].Constructor.name}
          />
          <ConstructorName>
            {lastRaceResults.Results[19].Constructor.name}
          </ConstructorName>
        </HomeConstructorWrapper>
      </ConstructorInner>
    </BottomContructor>
  );
};
