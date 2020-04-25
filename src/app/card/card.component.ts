import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  title:string ="";
  @Input()
  imageUrl:string ="";
  @Input()
  content:string ="";
  @Input()
  username:string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
