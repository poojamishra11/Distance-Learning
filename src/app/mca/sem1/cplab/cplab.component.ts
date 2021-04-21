import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cplab',
  templateUrl: './cplab.component.html',
  styleUrls: ['./cplab.component.css']
})
export class CplabComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
