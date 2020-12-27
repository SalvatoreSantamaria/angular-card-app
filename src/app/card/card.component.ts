import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // by using @Input decorator, we can pass data from the app.component.ts file to the card component.ts file, 
  // and through to the card.component.html file
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';


  constructor() { }

  ngOnInit(): void {
  }

}
