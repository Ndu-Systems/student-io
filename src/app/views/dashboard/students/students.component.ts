import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {
  students = [
   
  
    {
      name: "Jonn Nkosi",
      email: "MusaNkosi1@gmail.com",
      studentNumber:`2678628`,
      cell:'071454545',
      course:'IT',
      year:2018,
      status:'pending'
    },
    {
      name: "Jonn Nkosi",
      email: "MusaNkosi1@gmail.com",
      studentNumber:`2678628`,
      cell:'071454545',
      course:'IT',
      year:2018,
      status:'active'
    },
    {
      name: "Jonn Nkosi",
      email: "MusaNkosi1@gmail.com",
      studentNumber:`2678628`,
      cell:'071454545',
      course:'IT',
      year:2018,
      status:'overdue'
    },
    {
      name: "Jonn Nkosi",
      email: "MusaNkosi1@gmail.com",
      studentNumber:`2678628`,
      cell:'071454545',
      course:'IT',
      year:2018,
      status:'pending'
    },
    {
      name: "Jonn Nkosi",
      email: "MusaNkosi1@gmail.com",
      studentNumber:`2678628`,
      cell:'071454545',
      course:'IT',
      year:2018,
      status:'active'
    },
  ];
  constructor() {}

  ngOnInit() {}
}
