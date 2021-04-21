import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mos',
  templateUrl: './mos.component.html',
  styleUrls: ['./mos.component.css']
})
export class MosComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
