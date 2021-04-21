import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem2endterm',
  templateUrl: './sem2endterm.component.html',
  styleUrls: ['./sem2endterm.component.css']
})
export class Sem2endtermComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
