import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAdmin: boolean = false;
  class1:string='navbar navbar-expand-lg navbar-light bg-light';
  class2:string='navbar navbar-expand-lg navbar-dark bg-dark'

}
