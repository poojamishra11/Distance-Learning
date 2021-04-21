import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem2assignment',
  templateUrl: './sem2assignment.component.html',
  styleUrls: ['./sem2assignment.component.css']
})
export class Sem2assignmentComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
