export interface Person {
  name: string;
  age: string;
  phoneNumber: string;
  address: string;
  picture: string;
}

const BASE_URL = 'http://localhost:3000';

export const get = async (text: string): Promise<Person[]> => {
  const url = new URL(`${BASE_URL}/search`);
  url.searchParams.append('text', text);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('unable to fetch data');
    }

    return await res.json();
  } catch (error) {
    console.error('error on fetching', error);
  }
};
