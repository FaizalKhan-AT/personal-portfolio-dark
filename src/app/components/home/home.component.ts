import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('typing') typing!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    new Typed(`.${this.typing.nativeElement.classList[0]}`, {
      strings: ['Software Developer. ', 'Content Creator. ', 'Freelancer. '],
      typeSpeed: 100,
      backDelay: 50,
      backSpeed: 70,
      loop: true,
    });
  }
  ngOnInit(): void {}
}
