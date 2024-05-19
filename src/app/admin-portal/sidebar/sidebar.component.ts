import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sidebarStatus: boolean = false;
  public sideBarMenu: any[] = [
    {
      name: 'Home',
      link: 'home',
      icon: 'fa-solid fa-house'
    },
    {
      name: 'About',
      link: 'about',
      icon: 'fa-solid fa-sliders'
    },
    {
      name: 'Products',
      link: 'product',
      icon: 'fa-solid fa-address-book'
    }
  ]

}
