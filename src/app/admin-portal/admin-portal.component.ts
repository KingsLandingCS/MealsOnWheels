import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent {
  public hideSidebar: boolean = false;

  constructor() { }
}
