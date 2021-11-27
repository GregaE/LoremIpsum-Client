import { Options } from '../interfaces/ApiInterfaces';
import { User } from '../interfaces/UserInterface';
const BASE_URL = 'http://localhost:3005';

async function fetchApi<T>(slug: string, options?: Options): Promise<T> {
  const res = await fetch(BASE_URL + slug, options);
  return res.json();
}

export function getUser(id: string): Promise<User> {
  return fetchApi<User>(id);
}
