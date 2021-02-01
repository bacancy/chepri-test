export interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string,
  },
}
