import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sl2',
  templateUrl: './sl2.component.html',
  styleUrls: ['./sl2.component.css']
})
export class Sl2Component implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
