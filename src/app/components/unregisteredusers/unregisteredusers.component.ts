import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { takeWhile } from 'rxjs/operators';
import { Unregisteredusers } from 'src/app/models/unregistereduser.model';
import { UserRepository } from 'src/app/services/user-repository';

@Component({
  selector: 'app-unregisteredusers',
  templateUrl: './unregisteredusers.component.html',
  styleUrls: ['./unregisteredusers.component.css']
})
export class UnregisteredusersComponent implements OnInit,OnDestroy ,AfterViewInit {

  users: Unregisteredusers[] = [];
  loading = false;
  error = false;
  isAlive = true;

  constructor(private userRepository: UserRepository) {
  }
  displayedColumns = ['id','emailAddress','languageCode','registrationId','registrationIdGeneratedTime'];
  dataSource = new MatTableDataSource<Unregisteredusers>();
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {
    debugger;
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
    debugger;
    const observer$ = this.userRepository.getUnregisteredUserList();
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
