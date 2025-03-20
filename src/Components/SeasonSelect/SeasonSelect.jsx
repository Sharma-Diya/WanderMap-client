import React from 'react';

const SeasonSelect = ({ seasons, selectedSeason, onSeasonChange }) => {
  return (
    <select onChange={onSeasonChange} value={selectedSeason || ''}>
      <option value="">Select Season</option>
      {seasons.map((season) => (
        <option key={season} value={season}>
          {season}
        </option>
      ))}
    </select>
  );
};

export default SeasonSelect;
