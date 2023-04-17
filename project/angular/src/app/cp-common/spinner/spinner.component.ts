import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {

  @Input() text = null;
  @Input() height = '';
  @Input() width = '';
  @Input() position = '';
  @Input() top = '';
  @Input() left = '';
  @Input() backgroundColor = '';

  constructor() { }

  ngOnInit(): void {
  }

}
