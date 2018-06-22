import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  constructor() { }

  user = {
    id: 0,
    name: 'Michel François',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
    jobTitle: 'Customer Division Assistant'
  };

  changeName(e: Event) {
    this.user.name = (<HTMLInputElement>e.target).value;
  }

  ngOnInit() {
  }

}
