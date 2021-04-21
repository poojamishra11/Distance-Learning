import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sl1',
  templateUrl: './sl1.component.html',
  styleUrls: ['./sl1.component.css']
})
export class Sl1Component implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
