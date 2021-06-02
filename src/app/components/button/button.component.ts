import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Output() btnClick = new EventEmitter();

  constructor() {
    this.type = 'submit';
  }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
