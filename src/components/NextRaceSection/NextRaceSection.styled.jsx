import styled from 'styled-components';
import { AiTwotoneCalendar } from 'react-icons/ai';

export const FutureRaceSection = styled.section`
  width: 260px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.secondary};
`;

export const NextRaceHeading = styled.h2`
  font-size: 12px;
  font-weight: 300;
`;

export const NameAndFlagWrapper = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const NextRaceFlagImage = styled.img`
  width: 18px;
  height: 18px;
`;

export const NextRaceCountryName = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const DateWrapper = styled.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  align-items: flex-start;
`;

export const NextRaceCalandar = styled(AiTwotoneCalendar)`
  width: 12px;
  height: 12px;
`;

export const NextRaceDate = styled.p`
  font-size: 12px;
  font-weight: 300;
`;
