import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [
    {
      name: 'OLX Clone',
      tech: 'React, Firebase',
      link: 'https://olx-app-clone.web.app/',
      gitRepo: 'https://github.com/FaizalKhan-AT/Olx-App',
      desc: "This is desktop clone of the famous application called olx where you can sell used items of all category and new items as well.This repo is no commit history version of the app so you won't be able to see the commit history of this repo ('i have made my main remote repo private').This app has all the core fuctionality of the olx, and i tried to replicate the desktop design of the web app adding all the functionality like that of olx (this is not a responsive web app). fun fact is that this app was created a long time ago with minimum functionality due to some other factors , then now i updated this app with all the core functionality.",
      img: '../../../assets/images/olx.png',
    },
    {
      name: 'Netfix Clone',
      tech: 'React, Tmdb Api, Axios, Material UI',
      link: 'https://faizalkhan-at.github.io/Netflix-Clone/',
      gitRepo: 'https://github.com/FaizalKhan-AT/Netflix-Clone',
      desc: 'Netfix ui design using react and tmdb api. fully resopnsive webapp with multipe routes, fully skeleton loaded app with error handling and trailer viewing facility as well.',
      img: '../../../assets/images/netflix.png',
    },
    {
      name: 'Photoshop Clone',
      tech: 'Vanilla JavaScript, Html, Css',
      link: 'https://faizalkhan-at.github.io/Photoshop-Clone-for-YT/',
      gitRepo: 'https://github.com/FaizalKhan-AT/Photoshop-Clone-for-YT/',
      desc: 'A simple photo editor where you can select images from your comptuter and add filters to the images to make it vibrant and good looking .I call it the photoshop clone.',
      img: '../../../assets/images/photoeditor.png',
    },
    {
      name: 'Windows Calculator Clone',
      tech: 'Java',
      link: 'Link not available',
      gitRepo: 'https://github.com/FaizalKhan-AT/Calculator-Java-',
      desc: 'Windows styled Calculator app using java swing ui. it has all the basic calculator operations.',
      img: '../../../assets/images/calc.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
