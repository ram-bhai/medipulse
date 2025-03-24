import { createReducer, on } from '@ngrx/store';
import { setUser, clearUser } from '../actions/auth.actions';

export interface AuthState {
  user: any | null;
}

const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({ ...state, user })),
  on(clearUser, () => ({ user: null }))
);
