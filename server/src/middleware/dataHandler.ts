import * as fs from 'fs';

const parsePhoneNumber = (phoneNumber: string) => {
  return parseInt(phoneNumber.replace(/\D/g, ''), 10);
};

const getCurrentAge = (dateOfBirth: string): number => {
  return new Date().getFullYear() - new Date(dateOfBirth.replace(/\s/g, '')).getFullYear();
};

export const extractDataToMap = (): Map<number, unknown> => {
  const filePath = './data/contacts.json';
  const data = fs.readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(data);
  const peopleData = new Map();

  jsonData.forEach((item: any) => {
    if (item.phone_number) {
      const phoneNumber = parsePhoneNumber(item.phone_number);
      peopleData.set(phoneNumber, {
        uuid: item._id,
        picture: item.picture,
        birthday: item.birthday,
        name: item.name,
        address: item.address,
        phoneNumber: item.phone_number,
        searchIndex: `${item.name}${getCurrentAge(item.birthday)}`,
      });
    }
  });

  return peopleData;
};
