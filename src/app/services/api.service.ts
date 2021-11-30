import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import { Unregisteredusers } from '../models/unregistereduser.model';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {
  }

  getAllUser(): Observable<User[]> {
   return this.httpService.get('/registeredusers')
    
      .pipe(map(data => data as User[]));
  }

  getAllUnregisteredUser(): Observable<Unregisteredusers[]> {
    return this.httpService.get('/unregisteredusers')
     
       .pipe(map(data => data as Unregisteredusers[]));
   }
}
