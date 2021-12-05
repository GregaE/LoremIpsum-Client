import { Options } from '../interfaces/ApiInterfaces';
import { User } from '../interfaces/UserInterface';
import { loginInterface } from '../store/state_interfaces/loginInterface';
const BASE_URL = 'http://localhost:3006';

async function fetchApi<T>(slug: string, options?: Options): Promise<T> {
  const res = await fetch(BASE_URL + slug, options);
  return res.json();
}

export async function getUser(id: string): Promise<User> {
  return await fetchApi<User>(id);
}

export function LoginService (user: loginInterface): any  {
   fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(
      'Error ' + res.status + ': ' + res.statusText
    );
  },
  error => {
    throw new Error(error.message);
  });
}

export async function LogoutService ()  {
  try {
    const res = await fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  } catch (err) {
    return console.error(err);
  }
}

export function RegisterService (user: loginInterface): any {
  fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(
      'Error ' + res.status + ': ' + res.statusText
    );
  },
  error => {
    throw new Error(error.message);
  });
}