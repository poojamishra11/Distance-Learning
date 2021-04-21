import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem2classtest',
  templateUrl: './sem2classtest.component.html',
  styleUrls: ['./sem2classtest.component.css']
})
export class Sem2classtestComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
