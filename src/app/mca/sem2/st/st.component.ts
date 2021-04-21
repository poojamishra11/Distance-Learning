import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-st',
  templateUrl: './st.component.html',
  styleUrls: ['./st.component.css']
})
export class StComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
