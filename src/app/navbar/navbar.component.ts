import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  title: string;
  navOptions: Array<string>;
  constructor() { 
    this.title = 'Chat App';
    this.navOptions = [
      'AlterEgo',
      'Home',
      'About',
      'Forum',
      'Contact'
    ];
  }

  ngOnInit() {
    console.log("Generaterd on initialization");
  }
}
