import { Request, Response } from 'express';
import { PeopleRepository } from '../repositories/peopleRepository';

const peopleService = new PeopleRepository();

const inputParser = (text: string): { parsedName: string; parsedAge: string; parsedPhoneNumber: string } => {
  const phoneNumberRegex = /\(?(\d{3})\)?\s?(\d{7})/;
  const matchPhoneNumber = text.match(phoneNumberRegex);
  const parsedPhoneNumber = matchPhoneNumber ? `${matchPhoneNumber[1]}${matchPhoneNumber[2]}` : '';
  let input = text.replace(phoneNumberRegex, '');

  const matchAge = input.match(/\b\d{1,2}\b/);
  const parsedAge = matchAge ? `0${matchAge[0]}`.slice(-2) : '';
  input = input.replace(/\d{1,2}/, '');

  const matchName = input.match(/[a-zA-Z\s]+/);
  const parsedName = matchName ? matchName[0].trim() : '';

  return { parsedName, parsedAge, parsedPhoneNumber };
};

export const search = (req: Request, res: Response) => {
  const searchInput: string = req.query.text as string;

  if (!searchInput) {
    return res.status(400).json({ message: 'No valid query input' });
  }

  try {
    const { parsedName, parsedAge, parsedPhoneNumber } = inputParser(searchInput);
    console.log(`Parsed query with name:${parsedName} age:${parsedAge} phoneNumber:${parsedPhoneNumber}`);

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

    return res.status(200).json([]);
  } catch (e) {
    console.error('server error ', e);
    return res.status(500).send('Something is wrong');
  }
};
