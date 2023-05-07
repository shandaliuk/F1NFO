import { TopResults } from 'components/TopResults/TopResults';
import { WorstResults } from 'components/WorstResults/WorstResults';
import {
  HighestWrapper,
  HighestInnerWrapper,
  InnerTitleWrapper,
  MobileInnerTitle,
  MobileInnerTitleInvert,
} from './MainLastRaceResults.styled';

export const MainLastRaceResults = ({ lastRaceResults }) => {
  return (
    <HighestWrapper>
      <InnerTitleWrapper>
        <p>Top Scorers</p>
        <MobileInnerTitle>Bottom Scorers</MobileInnerTitle>
      </InnerTitleWrapper>
      <HighestInnerWrapper>
        <TopResults lastRaceResults={lastRaceResults} />
        <InnerTitleWrapper>
          <MobileInnerTitleInvert>Bottom Scorers</MobileInnerTitleInvert>
        </InnerTitleWrapper>
        <WorstResults lastRaceResults={lastRaceResults} />
      </HighestInnerWrapper>
    </HighestWrapper>
  );
};
