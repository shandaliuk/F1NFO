import countries from './countries.json';
import countriesMini from './countriesMini.json';
import drivers from './drivers.json';
import emblems from './emblems.json';
import cars from './cars.json';

export const getImageLink = ({ type, query }) => {
  switch (type) {
    case 'country':
      return countries.countries[query];
    case 'countryMini':
      return countriesMini.countries[query];
    case 'driver':
      return drivers.drivers[query];
    case 'emblem':
      return emblems.emblems[query];
    case 'car':
      return cars.cars[query];
    default:
      return null;
  }
};
