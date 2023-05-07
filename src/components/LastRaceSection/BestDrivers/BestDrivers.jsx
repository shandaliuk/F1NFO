import { useTheme } from 'styled-components';
import { getImageLink } from 'services/images/getImageLink';
import { DriversImageList, DriversListItem } from './BestDrivers.styled';

export const BestDrivers = ({ results }) => {
  const theme = useTheme();

  return (
    <>
      <h2>Top Scorers</h2>
      <div>
        <DriversImageList>
          <DriversListItem>
            <img
              src={getImageLink({
                type: 'driver',
                query: results[1].Driver.driverId,
              })}
              alt={results[1].Driver.familyName}
            />
          </DriversListItem>
          <li>
            <img
              src={getImageLink({
                type: 'driver',
                query: results[0].Driver.driverId,
              })}
              alt={results[0].Driver.familyName}
            />
          </li>
          <li>
            <img
              src={getImageLink({
                type: 'driver',
                query: results[2].Driver.driverId,
              })}
              alt={results[2].Driver.familyName}
            />
          </li>
        </DriversImageList>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};
