import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbms',
  templateUrl: './dbms.component.html',
  styleUrls: ['./dbms.component.css']
})
export class DbmsComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
