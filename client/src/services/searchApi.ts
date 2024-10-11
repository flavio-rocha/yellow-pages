export const get = async (text: string): Promise<any> => {
  const url = new URL('http://localhost:3000/search');
  url.searchParams.append('text', text);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('unable to fetch data');
  }

  return await res.json();
};
