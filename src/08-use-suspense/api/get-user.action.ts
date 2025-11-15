export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  console.log('Function called! Fetching user...');
  await new Promise((res) => setTimeout(res, 2000));

  console.log('Function resolved!');

  return {
    id: id,
    name: 'Cristian Sifuentes',
    location: 'Gomez Palacio, Durango, Mexico',
    role: 'Software Developer',
  };
};
