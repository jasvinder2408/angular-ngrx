import {Action} from '../actions';
import { UNREGISTERED_USER_LIST_SUCCESS } from '../actions/unregistered-user-action';
import {StoreUtility} from '../utils/store-utility';
import {createSelector} from '@ngrx/store';
import { Unregisteredusers } from '../models/unregistereduser.model';

export interface UnregisteredUserReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  entities: { [id: number]: Unregisteredusers };
  ids: number[];
}

const initialState: UnregisteredUserReducerState = {
  loaded: false,
  loading: false,
  error: false,
  entities: {},
  ids: []
};

export function UnregisteredUserReducer(state = initialState, action: Action): UnregisteredUserReducerState {
  switch (action.type) {
    
    case UNREGISTERED_USER_LIST_SUCCESS: {
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
export const getLoading = (state: UnregisteredUserReducerState) => state.loading;
export const getLoaded = (state: UnregisteredUserReducerState) => state.loaded;
export const getEntities = (state: UnregisteredUserReducerState) => state.entities;
export const getIds = (state: UnregisteredUserReducerState) => state.ids;
export const getUsers = createSelector(getEntities,
  (entities) => StoreUtility.unNormalized(entities));
export const getError = (state: UnregisteredUserReducerState) => state.error;

