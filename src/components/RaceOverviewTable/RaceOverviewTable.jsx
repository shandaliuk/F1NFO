export const RaceOverviewTable = ({ results }) => {
  console.log(results.toSorted((a, b) => a.number - b.number));
  return (
    <table>
      <thead></thead>
    </table>
  );
};
