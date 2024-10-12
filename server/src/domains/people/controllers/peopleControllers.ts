import { Request, Response } from 'express';

const findPhoneNumber = (text: string): string => {
  const phoneRegex = /\(?(\d{3})\)?\s?(\d{7})/;

  const phoneNumberMatch = text.match(phoneRegex);
  if (phoneNumberMatch && phoneNumberMatch[1].length + phoneNumberMatch[2].length === 10) {
    return `${phoneNumberMatch[1]}${phoneNumberMatch[2]}`;
  }

  return '';
};

const combineNameAndAge = (text: string) => {
  const ageRegex = /\b\d{1,2}\b/;

  const ageMatch = text.match(ageRegex);
};

export const search = (req: Request, res: Response) => {
  const textSearch: string = req.query.text as string;

  if (!textSearch) {
    return res.status(400).send('no query');
  }

  const dataMap = extractDataToMap();

  const fullPhoneNumber = findPhoneNumber(textSearch);
  if (fullPhoneNumber) {
    const person = dataMap.get(parseInt(fullPhoneNumber));
    if (person) {
      return res.status(200).json(person);
    }
  }

  const nameAndAge = combineNameAndAge(textSearch);

  return res.status(200).send(`query is ${fullPhoneNumber}`);
};
