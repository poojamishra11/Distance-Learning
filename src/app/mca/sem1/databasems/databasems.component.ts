import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databasems',
  templateUrl: './databasems.component.html',
  styleUrls: ['./databasems.component.css']
})
export class DatabasemsComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
