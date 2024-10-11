import { Request, Response } from 'express';
import { PeopleRepository } from '../repositories/peopleRepository';

const peopleService = new PeopleRepository();

const parsePhoneNumberFromInput = (text: string): string => {
  const phoneNumberRegex = /\(?(\d{3})\)?\s?(\d{7})/;
  const matchPhoneNumber = text.match(phoneNumberRegex);
  if (matchPhoneNumber && phoneNumberRegex[1].length + phoneNumberRegex[2].length) {
    return `${matchPhoneNumber[1]}${matchPhoneNumber[2]}`;
  }
  return '';
};

const parseNameAndAge = (text: string): { name: string; age: string } | null => {
  const matchName = text.match(/[a-zA-Z\s]+/);
  const matchAge = text.match(/\d+/);

  const name = matchName ? matchName[0].trim() : '';
  const age = matchAge ? matchAge[0].trim() : '';

  if (name || age) {
    return { name, age };
  }

  return null;
};

export const search = (req: Request, res: Response) => {
  const searchInput: string = req.query.text as string;

  if (!searchInput) {
    return res.status(400).json({ message: 'No query' });
  }

  try {
    const parsedPhoneNumber = parsePhoneNumberFromInput(searchInput);
    const { parsedName = '', parsedAge = '' } = parseNameAndAge(searchInput);

    if (parsedPhoneNumber) {
      const person = peopleService.searchPhoneNumber(parsedPhoneNumber);
      if (person) {
        const matchesName = parsedName ? person.searchIndex.includes(parsedName) : true;
        const matchesAge = parsedAge ? person.searchIndex.includes(parsedAge) : true;

        if (matchesName && matchesAge) {
          return res.status(200).json([person]);
        }
      }
    }

    if (parsedName || parsedAge) {
      const results = peopleService.searchNameOrAge(parsedName, parsedAge);

      if (results) {
        if (parsedName && parsedAge) {
          const asx = results.filter(
            (person) => person.searchIndex.includes(parsedName) && person.searchIndex.includes(parsedAge),
          );
          return res.status(200).json(asx);
        }
        return res.status(200).json(results);
      }
    }

    return res.status(404).json({ message: 'Query found no match' });
  } catch (e) {}
};
