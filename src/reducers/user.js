export const GET_EMAIL = 'GET_EMAIL';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return {
      ...state,
      email: action.user,
    };
  default: return state;
  }
};

export default user;
