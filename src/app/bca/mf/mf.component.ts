import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mf',
  templateUrl: './mf.component.html',
  styleUrls: ['./mf.component.css']
})
export class MfComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
