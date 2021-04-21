import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mse',
  templateUrl: './mse.component.html',
  styleUrls: ['./mse.component.css']
})
export class MseComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
