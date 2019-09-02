import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, of as observableOf, merge } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user.model';
import { MatTableDataSource,MatPaginator,MatCheckboxModule} from '@angular/material';
//import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
//import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource;
  displayedColumns = ['ifsc', 'bank_id', 'branch', 'address', 'city', 'district', 'state','bank_name','action'];
  searchKey: string;
  selected = "Mumbai"; 

  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.userService.getUser().subscribe(results => {
      if(!results){
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.paginator = this.paginator;
    })
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}


