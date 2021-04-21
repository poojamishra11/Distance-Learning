import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discretestruc',
  templateUrl: './discretestruc.component.html',
  styleUrls: ['./discretestruc.component.css']
})
export class DiscretestrucComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
