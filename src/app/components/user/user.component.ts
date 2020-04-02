import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() firstName;
  @Input() lastName;

  ngOnInit(): void {
    console.log('Ng On Init');
    console.log('firstName', this.firstName);
    
  }

  ngOnChanges(simpleChanges) {
    console.log('Ng On Changes => ', this.firstName);
    console.log(simpleChanges);
    
  }

}
