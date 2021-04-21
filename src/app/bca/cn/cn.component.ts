import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cn',
  templateUrl: './cn.component.html',
  styleUrls: ['./cn.component.css']
})
export class CnComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
