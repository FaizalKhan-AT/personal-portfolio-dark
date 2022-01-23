import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  otherDetails: any[] = [
    {
      key: 'Experience',
      value: 'Web development Intern at Banao Technologies',
    },
    {
      key: 'Place',
      value: 'Kollam,Kerala,India',
    },
    {
      key: 'School',
      value: 'TKM HSS Karicode,Kollam',
    },
    {
      key: 'College',
      value: 'Sree Narayana College of Technology (BCA)',
    },
    {
      key: 'Age',
      value: '19 years',
    },
    {
      key: 'Date of Birth',
      value: '03 May 2002',
    },
    {
      key: 'Email',
      value: 'faizalkhankpm@gmail.com',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
