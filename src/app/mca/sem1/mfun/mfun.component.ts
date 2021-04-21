import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfun',
  templateUrl: './mfun.component.html',
  styleUrls: ['./mfun.component.css']
})
export class MfunComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
