import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endterm',
  templateUrl: './endterm.component.html',
  styleUrls: ['./endterm.component.css']
})
export class EndtermComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
