import { Person } from '../domains/Person';

interface PersonPublicData {
  name: string;
  age: string;
  phoneNumber: string;
  address: string;
  picture: string;
}

export const mapPerson = (person: Person): PersonPublicData => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { uuid, searchIndex, ...personPublicData } = person;
  return personPublicData;
};
