import React from 'react';

const CitySelect = ({ cities, selectedCityId, onCityChange }) => {
  return (
    <select onChange={onCityChange} value={selectedCityId || ''}>
      <option value="">Select City</option>
      {cities.map((city) => (
        <option key={city.id} value={city.id}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CitySelect;
