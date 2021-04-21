import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem2midterm',
  templateUrl: './sem2midterm.component.html',
  styleUrls: ['./sem2midterm.component.css']
})
export class Sem2midtermComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
