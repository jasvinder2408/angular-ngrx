import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {User} from '../models/user';
import {UserRepository} from '../services/user-repository';
import {takeWhile} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'youtube-users',
  templateUrl: './users.component.html',
  styleUrls: []
})
export class UsersComponent implements OnInit, OnDestroy ,AfterViewInit{
  users: User[] = [];
  loading = false;
  error = false;
  isAlive = true;

  constructor(private userRepository: UserRepository, private dialog: MatDialog) {
  }
  displayedColumns = ['id', 'city', 'company', 'country', 'disclaimerAccepted'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {
    this.fetchData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    const observer$ = this.userRepository.getUserList();
    const userData$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    userData$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.dataSource.data=data;
    });
    loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loading = data;
    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.error = data;
    });
  }

}