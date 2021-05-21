import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor() { }

  ngOnInit(): void {
this.employees=[
      {
        "id": 1,
        "firstName": "string1",
        "lastName": "string1",
        "emailId": "string@gmail.com"

      },
      {
        "id": 21,
        "firstName": "string21",
        "lastName": "string21",
        "emailId": "string21@gmail.com"

      }
    ];


  }

}
