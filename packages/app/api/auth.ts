import { AUTH, User } from '@jikaheimo/shared';
import { api } from './setup';

export const fetchCurrentUser = async () => {
  const { data: user } = await api.get(`${AUTH}/current_user`);
  return user as User;
};

export default { fetchCurrentUser };
