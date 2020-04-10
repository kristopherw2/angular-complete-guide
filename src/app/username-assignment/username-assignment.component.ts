import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-assignment',
  templateUrl: './username-assignment.component.html',
  styleUrls: ['./username-assignment.component.css'],
})
export class UsernameAssignmentComponent implements OnInit {
  userName = 'Uinike';

  constructor() {}

  ngOnInit(): void {}

  onUpdateUsername(event: any) {
    this.userName = event.target.value;
  }

  clearInput() {
    console.log(this.userName.length > 0);
    this.userName = '';
  }
}
