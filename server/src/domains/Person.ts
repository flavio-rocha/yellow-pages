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
    const age = new Date().getFullYear() - new Date(dateOfBirth.replace(/\s/g, '')).getFullYear();
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
