import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsDemo';
form= new FormsDetails("vikas","vk@landge","latur","Latur");

}
export class FormsDetails{
  constructor(public name,public email,public street,public city){
  }
}