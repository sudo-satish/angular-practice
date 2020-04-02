import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  firstName="Satish"

  constructor(private authService: AuthService) {
    authService.printName();
  }

  ngOnInit() {
    setTimeout(() => {
      this.firstName = 'Rashi'
    }, 2000);
  }
}
