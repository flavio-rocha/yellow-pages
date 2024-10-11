import { Person } from '../domains/Person';
import * as fs from 'fs';
import { Contact } from '../domains/Contact';

const parsePhoneNumber = (phoneNumber: string): number => {
  return parseInt(phoneNumber.replace(/\D/g, ''), 10);
};

export class PersonRepository {
  private peopleMap: Map<number, Person>;

  constructor() {
    this.peopleMap = this.loadDataFromFile();
  }

  private loadDataFromFile(): Map<number, Person> {
    const filePath = './data/contacts.json';
    const data = fs.readFileSync(filePath, 'utf-8');
    const jsonData: Contact[] = JSON.parse(data);
    const dataMap = new Map<number, Person>();

    jsonData.forEach((contact: Contact) => {
      if (contact.phone_number) {
        dataMap.set(parsePhoneNumber(contact.phone_number), Person.create(contact));
      }
    });

    return dataMap;
  }

  searchPhoneNumber(phoneNumber: string): Person | null {
    return this.peopleMap.get(parsePhoneNumber(phoneNumber)) ?? null;
  }

  searchNameOrAge(name: string, age: string) {
    return Array.from(this.peopleMap.values()).filter((person: Person) => {
      const hasName = name ? person.searchIndex.includes(name) : true;
      const hasAge = name ? person.searchIndex.includes(age) : true;
      return hasName && hasAge;
    });
  }
}
