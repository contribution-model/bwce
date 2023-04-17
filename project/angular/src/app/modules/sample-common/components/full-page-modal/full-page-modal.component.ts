import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'full-page-modal',
  templateUrl: './full-page-modal.component.html',
  styleUrls: ['./full-page-modal.component.less']
})
export class FullPageModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter();
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() content: string = '';
  @Input() showCancelButton: boolean = false;
  @Input() showSaveDraftButton: boolean = false;
  @Input() showSubmitButton: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.closeModal.emit();
  }

}
