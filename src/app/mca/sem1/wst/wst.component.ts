import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wst',
  templateUrl: './wst.component.html',
  styleUrls: ['./wst.component.css']
})
export class WstComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
