import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstAngularProject';
  @ViewChild(HeaderComponent) myChild:HeaderComponent;
  //ngOnInit(){
   // console.log(this.myChild.isAdmin)
  //}
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  //le composant headerComponent est créé => myChild est définit
  //je peux accéder à isAdmin
  console.log("viewchild" + this.myChild.isAdmin);
  }
}
