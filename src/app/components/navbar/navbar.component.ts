import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navMenu') navMenu!:ElementRef;
  @ViewChild('navCheck') navCheck!:ElementRef;
  @ViewChild('navItems') navItems!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  handleNavOpen():void {
    if(this.navCheck.nativeElement.checked === true) {
      this.navMenu.nativeElement.classList.remove('nav-active')
      this.navItems.nativeElement.classList.remove('nav-active')
      this.navCheck.nativeElement.checked = false  
    }
    else{
      this.navMenu.nativeElement.classList.add('nav-active') 
      this.navItems.nativeElement.classList.add('nav-active')
      this.navCheck.nativeElement.checked = true;      
    }
  }
}
