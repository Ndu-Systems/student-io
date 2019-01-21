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
      studentNumber: `2678628`,
      cell: "071454545",
      course: "IT",
      year: 2018,
      status: "pending",
      subjects: 3
    },
    {
      name: "Jonn Nkosi",
      email: "MusaNkosi1@gmail.com",
      studentNumber: `2678628`,
      cell: "071454545",
      course: "IT",
      year: 2018,
      status: "active",
      subjects: 3
    },
    {
      name: "Jonn Nkosi",
      email: "MusaNkosi1@gmail.com",
      studentNumber: `2678628`,
      cell: "071454545",
      course: "IT",
      year: 2018,
      status: "overdue",
      subjects: 3
    },
    {
      name: "Jonn Nkosi",
      email: "MusaNkosi1@gmail.com",
      studentNumber: `2678628`,
      cell: "071454545",
      course: "IT",
      year: 2018,
      status: "pending",
      subjects: 3
    },
    {
      name: "Jonn Nkosi",
      email: "MusaNkosi1@gmail.com",
      studentNumber: `2678628`,
      cell: "071454545",
      course: "IT",
      year: 2018,
      status: "active",
      subjects: 3
    }
  ];
  constructor() {}

  ngOnInit() {}
}
