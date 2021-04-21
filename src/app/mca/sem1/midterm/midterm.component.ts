import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midterm',
  templateUrl: './midterm.component.html',
  styleUrls: ['./midterm.component.css']
})
export class MidtermComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
