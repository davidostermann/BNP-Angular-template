import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  constructor() { }

  user = {
    id: 0,
    name: 'Michel François',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
    jobTitle: 'Customer Division Assistant'
  };

  ngOnInit() {
  }

}
