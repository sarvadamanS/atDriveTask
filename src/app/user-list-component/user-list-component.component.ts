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
  filterType: string = 'name'; // Default filter type
  filterValue: string = '';
  data: any[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.userService.fetchData().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
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
