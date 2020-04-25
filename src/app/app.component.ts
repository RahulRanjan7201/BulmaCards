import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
     {title:"Neat Tree",imageUrl:"../assets/tree.jpeg", username:"nature", content:"I saw this neat tree today" },
     {title:"Snowy",imageUrl:"../assets/mountain.jpeg", username:"mountainLover", content:"Picture of mountain" },
     {title:"Mountain Biking",imageUrl:"../assets/biking.jpeg", username:"BikeLover", content:"I did some biking today" },
  ]
}
