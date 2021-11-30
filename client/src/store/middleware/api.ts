const baseUrl = 'http://localhost:3006';

const fetchData = async (
  endpoint: string,
  method: 'GET' | 'PUT' | 'POST' | 'DELETE',
  id?: string,
  data?: any) => {

    return await fetch(
      baseUrl + endpoint + (id && `/${id}`),
      {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : undefined
      }
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error ' + response.status + ': ' + response.statusText)
    }, error => {
      throw new Error(error.message)
    }).catch(error => console.error(error));
}

//change types
export const middleware = (store: any) => (next: any) => (action: any) => {
  if (action.type !== 'FETCH_DATA') return next(action);
  store.dispatch({type: 'LOADING'})
  fetchData(
    action.endpoint,
    action.method,
    action?.id,
    action?.payload
    )
    .then(data => store.dispatch({
      type: action.dispatch,
      payload: data
    }))
    .catch(error => store.dispatch({
      type: 'FAILED',
      payload: error.message
    }))
};