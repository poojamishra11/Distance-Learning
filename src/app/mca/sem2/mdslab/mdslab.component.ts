import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdslab',
  templateUrl: './mdslab.component.html',
  styleUrls: ['./mdslab.component.css']
})
export class MdslabComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
