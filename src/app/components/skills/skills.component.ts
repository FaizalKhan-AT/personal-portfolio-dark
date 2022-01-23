import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  mySkills: any[] = [
    {
      icon: 'fab fa-html5',
      skill: 'Html',
      level: 'Intermediate - Pro',
    },
    {
      icon: 'fab fa-css3',
      skill: 'Css',
      level: 'Intermediate - Pro',
    },
    {
      icon: 'fab fa-js-square',
      skill: 'JavaScript',
      level: 'Intermediate',
    },
    {
      icon: 'fab fa-react',
      skill: 'React',
      level: 'Intermediate',
    },
    {
      icon: 'fab fa-angular',
      skill: 'Angular',
      level: 'Beginner',
    },
    {
      icon: 'fab fa-java',
      skill: 'Java',
      level: 'Beginner - Intermediate',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
