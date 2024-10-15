import { Person } from '../../src/domains/Person';

describe('Person domain', () => {
  let data = [] as any;
  beforeAll(() => {
    data = [
      { name: 'name1', dataOfBirth: '1936-06-16T12:46:51 -02:00', phoneNumer: '1234567890' },
      { name: 'name2', dataOfBirth: '1936-01-16T12:46:51 -02:00', phoneNumer: '1234566543' },
      { name: 'name2', dataOfBirth: '1936-12-16T12:46:51 -02:00', phoneNumer: '1234566754' },
    ];
  });

  it('it should get the correct age', () => {
    const expectedAge =
      Math.floor(new Date().getTime() - new Date(data[0].dataOfBirth).getTime()) / (1000 * 60 * 60 * 24 * 365);
    const age = Person.getCurrentAge(data[0].dataOfBirth);
    expect(age).toBe('88');
  });
});
