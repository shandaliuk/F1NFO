import { useTheme } from 'styled-components';
import { getImageLink } from 'services/images/getImageLink';
import {
  CarsList,
  CarsListItem,
  ConstructorPoints,
  CarImage,
  CarCategory,
  ConstructorName,
} from './BestAndWorstTeam.styled';

export const BestAndWorstTeam = ({ results }) => {
  const theme = useTheme();

  return (
    <CarsList>
      <CarsListItem
        style={{
          border: `2px solid ${
            theme.colors.teams[results[0].Constructor.constructorId]
          }`,
        }}
      >
        <ConstructorPoints>{results[0].points}</ConstructorPoints>
        <CarImage
          src={getImageLink({
            type: 'car',
            query: results[0].Constructor.constructorId,
          })}
          alt={results[0].Constructor.name}
        />
        <CarCategory>Best</CarCategory>
        <ConstructorName>{results[0].Constructor.name}</ConstructorName>
      </CarsListItem>
      <CarsListItem
        style={{
          border: `2px solid ${
            theme.colors.teams[results[19].Constructor.constructorId]
          }`,
        }}
      >
        <ConstructorPoints>{results[19].points}</ConstructorPoints>
        <CarImage
          src={getImageLink({
            type: 'car',
            query: results[19].Constructor.constructorId,
          })}
          alt={results[19].Constructor.name}
        />
        <CarCategory>Worst</CarCategory>
        <ConstructorName>{results[19].Constructor.name}</ConstructorName>
      </CarsListItem>
    </CarsList>
  );
};
