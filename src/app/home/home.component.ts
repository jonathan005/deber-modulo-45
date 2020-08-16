import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [{'image': 'https://i.pinimg.com/originals/2e/5b/fa/2e5bfa813dbd7b7cb3db587e70620ec0.jpg'},
   {'image': 'https://fondosmil.com/fondo/2255.jpg'}];

  constructor() { }

  ngOnInit() {
  }

}
