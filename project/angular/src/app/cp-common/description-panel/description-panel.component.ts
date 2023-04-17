import { Component, Input } from '@angular/core';

@Component({
  selector: 'description-panel',
  templateUrl: './description-panel.component.html',
  styleUrls: ['./description-panel.component.less']
})
export class DescriptionPanelComponent {

  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() imgURL: string | undefined;
  @Input() imgAlt: string | undefined;

  constructor() { }

}
