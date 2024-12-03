import { Contact } from './Contact';

export class Person {
  constructor(
    public uuid: string,
    public picture: string,
    public age: string,
    public name: string,
    public address: string,
    public phoneNumber: string,
    public searchIndex: string,
  ) {}

  static getCurrentAge(dateOfBirth: string) {
    const msPerYear = 1000 * 60 * 60 * 24 * 365;
    const diff = new Date().getTime() - new Date(dateOfBirth.replace(/\s/g, '')).getTime();
    const age = Math.floor(diff / msPerYear);

    return `0${age}`.slice(-2);
  }

  static setSearchIndex(name: string, birthday: string) {
    return `${name} ${this.getCurrentAge(birthday)}`.toLowerCase();
  }

  static create(contact: Contact) {
    return new Person(
      contact._id,
      contact.picture,
      this.getCurrentAge(contact.birthday.slice()),
      contact.name,
      contact.address,
      contact.phone_number,
      this.setSearchIndex(contact.name, contact.birthday),
    );
  }
}
