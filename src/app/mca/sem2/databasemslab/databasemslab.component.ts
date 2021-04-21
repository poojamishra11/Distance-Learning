import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databasemslab',
  templateUrl: './databasemslab.component.html',
  styleUrls: ['./databasemslab.component.css']
})
export class DatabasemslabComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
