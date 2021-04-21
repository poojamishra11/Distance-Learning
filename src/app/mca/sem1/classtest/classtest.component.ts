import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classtest',
  templateUrl: './classtest.component.html',
  styleUrls: ['./classtest.component.css']
})
export class ClasstestComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
