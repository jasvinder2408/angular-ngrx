import {User} from '../models/user';
import {Action} from '../actions';
import {USER_LIST_SUCCESS} from '../actions/user-action';
import {StoreUtility} from '../utils/store-utility';
import {createSelector} from '@ngrx/store';

export interface UserReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  entities: { [id: number]: User };
  ids: number[];
}

const initialState: UserReducerState = {
  loaded: false,
  loading: false,
  error: false,
  entities: {},
  ids: []
};

export function UserReducer(state = initialState, action: Action): UserReducerState {
  switch (action.type) {
    
    case USER_LIST_SUCCESS: {
      const users = action.payload.data;
      const obj = StoreUtility.normalize(users);
      const newEntities = {...state.entities, ...obj};
      const ids = users.map(user => user.id);
      const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
      return {
        ...state, ...{
          loaded: true,
          loading: false, error: false,
          entities: newEntities, ids: newIds
        }
      };
    }
    default: {
      return state;
    }
  }
}

// selectors
export const getLoading = (state: UserReducerState) => state.loading;
export const getLoaded = (state: UserReducerState) => state.loaded;
export const getEntities = (state: UserReducerState) => state.entities;
export const getIds = (state: UserReducerState) => state.ids;
export const getUsers = createSelector(getEntities,
  (entities) => StoreUtility.unNormalized(entities));
export const getError = (state: UserReducerState) => state.error;

