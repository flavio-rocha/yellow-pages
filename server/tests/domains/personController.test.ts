import { Person } from '../../src/domains/Person';

interface RawContact {
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
}

describe('Person domain', () => {
  const data = [
    { name: 'name1', dateOfBirth: '1936-06-16T12:46:51 -02:00', phoneNumber: '1234567890' },
    { name: 'name2', dateOfBirth: '1936-01-16T12:46:51 -02:00', phoneNumber: '1234566543' },
    { name: 'name2', dateOfBirth: '1936-12-16T12:46:51 -02:00', phoneNumber: '1234566754' },
  ] as RawContact[];

  it('it should get the correct age', () => {
    const expectedAge = Math.floor(new Date().getTime() - new Date(data[0].dateOfBirth.replace(/\s/g, '')).getTime()) / (1000 * 60 * 60 * 24 * 365);
    const age = Person.getCurrentAge(data[0].dateOfBirth);
    expect(age).toBe(Math.floor(expectedAge).toString());
  });
});
