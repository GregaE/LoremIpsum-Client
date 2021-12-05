const initState = {
  isLoggedIn: false,
  user_id: ''
};


function loginReducer(
  state=initState,
  action: any
): any {
  switch (action.type) {
    case 'SET_USER':
      return {
        isLoggedIn: true,
        user_id: action.payload
      }
    default:
      return state;
  }
}

export default loginReducer;