import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cprog',
  templateUrl: './cprog.component.html',
  styleUrls: ['./cprog.component.css']
})
export class CprogComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
