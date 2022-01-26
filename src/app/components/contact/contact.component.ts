import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  socialMedia: any[] = [
    {
      link: 'https://www.instagram.com/al_techie/',
      name: 'Instagram',
      icon: 'fab fa-instagram',
    },
    {
      link: 'https://www.linkedin.com/in/faizal-khan-at',
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
    },
    {
      link: 'mailto://faizalkhankpm@gmail.com',
      name: 'Email',
      icon: 'fas fa-envelope',
    },
    {
      link: 'https://github.com/FaizalKhan-AT',
      name: 'Github',
      icon: 'fab fa-github',
    },
    {
      link: 'https://www.youtube.com/ALTECHIE',
      name: 'YouTube',
      icon: 'fab fa-youtube',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
