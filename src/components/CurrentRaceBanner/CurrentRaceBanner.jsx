import { getImageLink } from 'services/images/getImageLink';
import {
  CurrentRaceWrapper,
  CurrentRaceBackground,
  CurrentRaceTitle,
} from './CurrentRaceBanner.styled';

export const CurrentRaceBanner = ({ country }) => {
  return (
    <CurrentRaceWrapper>
      <CurrentRaceBackground
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(134,93,255,1) 0%, rgba(147,111,255,0) 60%),url(${getImageLink(
            {
              type: 'country',
              query: country,
            }
          )})`,
        }}
      >
        <CurrentRaceTitle>{country} results</CurrentRaceTitle>
      </CurrentRaceBackground>
    </CurrentRaceWrapper>
  );
};
