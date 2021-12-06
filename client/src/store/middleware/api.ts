import { EnumCategories } from '../../interfaces/CategoriesInterface';

const baseUrl = 'http://localhost:3006';

type Endpoint =
  | '/login'
  | '/user'
  | '/certificates'
  | '/skills'
  | '/education'
  | '/languages'
  | '/personalDetails'
  | '/savedCV'
  | '/workExperience';

type Method = 'GET' | 'PUT' | 'POST' | 'DELETE';

const fetchData = async (
  endpoint: Endpoint,
  method: Method,
  id?: string,
  data?: any
) => {
  return await fetch(baseUrl + endpoint + (id && `/${id}`), {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          'Error ' + response.status + ': ' + response.statusText
        );
      },
      error => {
        throw new Error(error.message);
      }
    )
    .catch(error => console.error(error));
};

type FetchAction = {
  endpoint: Endpoint;
  method: Method;
  type: string;
  id?: string;
  payload?: EnumCategories;
  dispatch: string;
};

export const middleware =
  (store: any) => (next: any) => (action: FetchAction) => {
    if (action.type !== 'FETCH_DATA') return next(action);
    store.dispatch({ type: 'LOADING' });
    fetchData(
      action.endpoint,
      action.method,
      action.id && action.id,
      action.payload && action.payload
    )
      .then(data => {
        store.dispatch({
          type: action.dispatch,
          payload: data,
        });
      })
      .catch(error =>
        store.dispatch({
          type: 'FAILED',
          error: error.message,
        })
      );
  };
