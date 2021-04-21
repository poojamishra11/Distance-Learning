import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.css']
})
export class CoaComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
