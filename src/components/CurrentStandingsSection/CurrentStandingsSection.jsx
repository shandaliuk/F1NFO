import { useState } from 'react';
import { useGetDriverStandingsQuery } from 'services/formulaOneApi/formulaOneApi';
import { useGetConstructorStandingsQuery } from 'services/formulaOneApi/formulaOneApi';

export const CurrentStandingsSection = () => {
  const [currentStandings, setCurrentStandings] = useState(null);

  const {
    data: driversData,
    isDriverDataLoading,
    isDriverDataError,
  } = useGetDriverStandingsQuery();

  const {
    data: constructorData,
    isConstructorDataLoading,
    isConstructorDataError,
  } = useGetConstructorStandingsQuery();

  return (
    <section>
      <h2>Current Standings</h2>
      <ul>
        <li>
          <button type="button">Drivers</button>
        </li>
        <li>
          <button type="button">Teams</button>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Name</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  );
};
