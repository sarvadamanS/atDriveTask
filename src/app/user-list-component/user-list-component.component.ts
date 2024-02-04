import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [UserService],
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.css',
})
export class UserListComponentComponent {
  currentStatus: string = 'Loading.....';
  filterType: string = 'name'; // Default filter type
  filterValue: string = ''; //Stores keywords typed using Two way Data binding
  data: any[] = [];
  constructor(private userService: UserService) {}
  //Called on intialisation
  ngOnInit(): void {
    this.fetchData();
  }
  //Call method from API serive to fetch data
  fetchData() {
    this.userService.fetchData().subscribe((data: any) => {
      this.data = data;
    }),
      (error: any) => {
        console.log('oops', error);
        this.currentStatus = error;
      };
  }
  //Filtering data accroding to input
  filteredData() {
    if (this.filterValue.length === 0) {
      return this.data;
    } else {
      let filteredItems;
      if (this.filterType === 'name') {
        filteredItems = this.data.filter((item) =>
          item.name.toLowerCase().includes(this.filterValue.toLowerCase())
        );
      } else if (this.filterType === 'email') {
        filteredItems = this.data.filter((item) =>
          item.email.toLowerCase().includes(this.filterValue.toLowerCase())
        );
      }
      return filteredItems || [];
    }
  }
}
