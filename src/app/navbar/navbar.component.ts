import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedMenu = "";

  constructor() { }

  ngOnInit(): void {
    this.selectedMenu = "Home";
  }

  menuClick(item: any) {
    this.selectedMenu = "";
    this.selectedMenu = item;
  }

}
