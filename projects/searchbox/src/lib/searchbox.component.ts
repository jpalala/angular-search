import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-searchbox',
  template: `
   <input type="text">
  `,
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
