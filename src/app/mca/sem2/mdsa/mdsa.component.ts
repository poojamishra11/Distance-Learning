import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdsa',
  templateUrl: './mdsa.component.html',
  styleUrls: ['./mdsa.component.css']
})
export class MdsaComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
