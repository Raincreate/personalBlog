import { LOGIN } from './actionTypes';

const initialState = {
  userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
};

export interface UserLoginState {
  userInfo?: {
    name?: string;
    avatar?: string;
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    // case LOGIN: {
    //   const userInfo = {
    //     ...action.payload,
    //     avatar: '',
    //     name: action.payload.userName,
    //   };
    //   localStorage.setItem('userInfo', JSON.stringify(userInfo));
    //   state.userInfo = userInfo;
    // }
    default:
      return state;
  }
}
