import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {User} from '../models/user';
import {UserRepository} from '../services/user-repository';
import {takeWhile} from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: []
})
export class UsersComponent implements OnInit, OnDestroy ,AfterViewInit{
  users: User[] = [];
  loading = false;
  error = false;
  isAlive = true;

  constructor(private userRepository: UserRepository) {
  }
  displayedColumns = ['id','firstName','lastName','city','company', 'country', 'disclaimerAccepted'];
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

  doFilter(event: Event) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  
  }
  
  ngOnDestroy() {
    this.isAlive = false;
  }

  onPaginateChange($event) {
    console.log($event);
    }

  fetchData() {
    const observer$ = this.userRepository.getUserList();
    const userData$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    userData$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.dataSource.data=data;
      console.log('table data', data);
    });
    loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loading = data;
    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.error = data;
    });
  }

}