import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    { title: "Neat Tree",
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this tree today'
    },
    { title: "Mountain",
    imageUrl: 'assets/mountain.jpeg',
    username: 'mtnman',
    content: 'I love mountains'
    },
    { title: "Biking Time",
    imageUrl: 'assets/biking.jpeg',
    username: 'biking1222',
    content: 'Gotta go biking'
    }
  ]

}
