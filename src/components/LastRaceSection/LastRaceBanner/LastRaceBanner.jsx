import { getImageLink } from 'services/images/getImageLink';
import { BannerBackground, BannerTitle } from './LastRaceBanner.styled';

export const LastRaceBanner = ({ country }) => {
  return (
    <BannerBackground
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(134,93,255,1) 0%, rgba(147,111,255,0) 60%),url(${getImageLink(
          {
            type: 'country',
            query: country,
          }
        )})`,
      }}
    >
      <BannerTitle>{country} results</BannerTitle>
    </BannerBackground>
  );
};
