import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-dummy-child',
  templateUrl: './dummy-child.component.html',
  styleUrls: ['./dummy-child.component.less']
})
export class DummyChildComponent implements OnInit {
  title: string = 'This is a child component';

  constructor() { }

  ngOnInit(): void {
  }

}
