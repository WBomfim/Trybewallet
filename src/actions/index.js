import GET_EMAIL from '../reducers/user';
import { WALLET_INITIAL } from '../reducers/wallet';

export const getUser = (user) => ({
  type: GET_EMAIL,
  user,
});

export const updateWallet = (wallert) => ({
  type: WALLET_INITIAL,
  wallert,
});
