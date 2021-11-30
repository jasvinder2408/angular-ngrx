import * as fromUser from './user-reducer';
import * as fromUnregisteredUser from './unregistered-user-reducer';
import {ActionReducerMap, createSelector} from '@ngrx/store';


export interface RootReducerState {
  users: fromUser.UserReducerState;
  unregisterUser: fromUnregisteredUser.UnregisteredUserReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  users: fromUser.UserReducer,
  unregisterUser: fromUnregisteredUser.UnregisteredUserReducer,
};

export const getUserState = (state: RootReducerState) => state.users;

export const getUserLoaded = createSelector(getUserState, fromUser.getLoaded);
export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
export const getUserEntities = createSelector(getUserState, fromUser.getEntities);
export const getUsers = createSelector(getUserState, fromUser.getUsers);
export const getUserError = createSelector(getUserState, fromUser.getError);

/**
 * For Unregistered User
 */

 export const getUnregisteredUserState = (state: RootReducerState) => state.unregisterUser;

 export const getUnregisteredUserLoaded = createSelector(getUnregisteredUserState, fromUnregisteredUser.getLoaded);
 export const getUnregisteredUserLoading = createSelector(getUnregisteredUserState, fromUnregisteredUser.getLoading);
 export const getUnregisteredUserEntities = createSelector(getUnregisteredUserState, fromUnregisteredUser.getEntities);
 export const getUnregisteredUsers = createSelector(getUnregisteredUserState, fromUnregisteredUser.getUsers);
 export const getUnregisteredUserError = createSelector(getUnregisteredUserState, fromUnregisteredUser.getError);
 