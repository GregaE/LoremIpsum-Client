import { Options } from '../interfaces/ApiInterfaces';
import { User } from '../interfaces/UserInterface';
import { loginInterface } from '../store/state_interfaces/loginInterface';
import { registerInterface } from '../store/state_interfaces/registerInterface';
const BASE_URL = 'http://localhost:3006';

async function fetchApi<T>(slug: string, options?: Options): Promise<T> {
  console.log(slug, options);
  const res = await fetch(BASE_URL + slug, options);
  return res.json();
}

export function getUser(id: string): Promise<User> {
  return fetchApi<User>(id);
}

export async function LoginService (user: loginInterface)  {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
}

export async function LogoutService ()  {
  try {
    const res = await fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
}

export async function RegisterService (user: registerInterface) {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
}