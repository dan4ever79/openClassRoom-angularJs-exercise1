import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;

  constructor() {
    this.createdAt = new Date();
  }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }


  computeRelatedOnLoveIts() {
    if (this.loveIts > 0) {
      return 'yes';
    }
    if (this.loveIts < 0) {
      return 'no';
    }
    return 'n/a';
  }

  loveIt() {
    console.log("previous counter(" + this.loveIts + ") - increment by 1 - now(" + (this.loveIts + 1) + ")");
    this.loveIts++;
  }

  dontLoveIt() {
    console.log("previous counter(" + this.loveIts + ") - decrement by 1 - now(" + (this.loveIts - 1) + ")");
    this.loveIts--;
  }


}
