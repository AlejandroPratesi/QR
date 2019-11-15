import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularQR';

  vCardData = 'www.axtonit.com';

  constructor(){

   /*  let o = {
      name: 'Alejandro',
      surname: 'PR',
      org: 'org',
      url: 'url',
      email: 'email',
      tel: 1155798365,
    }
    this.vCardData = JSON.stringify(o); */
    
  }


}
