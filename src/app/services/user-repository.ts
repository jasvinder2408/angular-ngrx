import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  getUserError,
  getUserLoaded,
  getUserLoading,
  getUsers,
  getUnregisteredUserError,
  getUnregisteredUserLoaded,
  getUnregisteredUserLoading,
  getUnregisteredUsers,
  RootReducerState
} from '../reducers';
import {combineLatest, Observable, UnsubscriptionError} from 'rxjs';
import {
  UserListErrorAction,
  UserListRequestAction,
  UserListSuccessAction,
} from '../actions/user-action';
import {
  UnregisteredUserListRequestAction,
  UnregisteredUserListErrorAction,
  UnregisteredUserListSuccessAction
}from '../actions/unregistered-user-action';
import {ApiService} from './api.service';
import {User} from '../models/user';
import {take} from 'rxjs/operators';
import { Unregisteredusers } from '../models/unregistereduser.model';

@Injectable()
export class UserRepository {
  constructor(private store: Store<RootReducerState>, private apiService: ApiService) {
  }

  getUserList(force = false): [Observable<boolean>, Observable<User[]>, Observable<boolean>] {
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const getUserData$ = this.store.select(getUsers);
    const getError$ = this.store.select(getUserError);
    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new UserListRequestAction());
        this.apiService.getAllUser().subscribe(res => {
          this.store.dispatch(new UserListSuccessAction({data: res}));
        }, error => {
          this.store.dispatch(new UserListErrorAction());
        });
      }
    });
    return [loading$, getUserData$, getError$];
  }
  getUnregisteredUserList(force = false): [Observable<boolean>, Observable<Unregisteredusers[]>, Observable<boolean>] {
    const loading$ = this.store.select(getUnregisteredUserLoading);
    const loaded$ = this.store.select(getUnregisteredUserLoaded);
    const getUserData$ = this.store.select(getUnregisteredUsers);
    const getError$ = this.store.select(getUnregisteredUserError);
    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new UnregisteredUserListRequestAction());
        this.apiService.getAllUnregisteredUser().subscribe(res => {
          this.store.dispatch(new UnregisteredUserListSuccessAction({data: res}));
        }, error => {
          this.store.dispatch(new UnregisteredUserListErrorAction());
        });
      }
    });
    return [loading$, getUserData$, getError$];
  }
  

}
