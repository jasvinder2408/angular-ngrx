import {Unregisteredusers} from '../models/unregistereduser.model';

export const UNREGISTERED_USER_LIST_REQUEST = 'unregistered user list request';
export const UNREGISTERED_USER_LIST_SUCCESS = 'unregistered user list success';
export const UNREGISTERED_USER_LIST_ERROR = 'unregistered user list error';

export class UnregisteredUserListRequestAction {
  readonly type = UNREGISTERED_USER_LIST_REQUEST;
}

export class UnregisteredUserListErrorAction {
  readonly type = UNREGISTERED_USER_LIST_ERROR;
}

export class UnregisteredUserListSuccessAction {
  readonly type = UNREGISTERED_USER_LIST_SUCCESS;

  constructor(public payload?: { data: Unregisteredusers[] }) {
  }
}
