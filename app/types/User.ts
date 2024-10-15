export type UserType = {
  id: number;
  name: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zupcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
