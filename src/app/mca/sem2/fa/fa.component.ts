import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fa',
  templateUrl: './fa.component.html',
  styleUrls: ['./fa.component.css']
})
export class FaComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
