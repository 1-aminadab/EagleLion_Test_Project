export interface ILocation {
    latitude: number;
      longitude: number;
}
export interface ICountry {
    name: string;
    code: string;
    flag: string;
    location: ILocation
  }
export const countries = [
    {
      name: 'Qatar',
      code: '+974',
      flag: '🇶🇦',
      location: { latitude: 25.276987, longitude: 51.520008 },
    },
    {
      name: 'Saudi Arabia',
      code: '+966',
      flag: '🇸🇦',
      location: { latitude: 23.885942, longitude: 45.079162 },
    },
    {
      name: 'UAE',
      code: '+971',
      flag: '🇦🇪',
      location: { latitude: 25.204849, longitude: 55.270783 },
    },
    {
      name: 'Kuwait',
      code: '+965',
      flag: '🇰🇼',
      location: { latitude: 29.375859, longitude: 47.977405 },
    },
    {
      name: 'Oman',
      code: '+968',
      flag: '🇴🇲',
      location: { latitude: 21.473533, longitude: 55.975413 },
    },
  ];
