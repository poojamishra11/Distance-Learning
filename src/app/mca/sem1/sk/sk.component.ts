import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sk',
  templateUrl: './sk.component.html',
  styleUrls: ['./sk.component.css']
})
export class SkComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
