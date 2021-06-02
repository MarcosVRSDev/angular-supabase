import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() inputType: string;
  @Input() placeholderText: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.inputType = 'text';
    this.placeholderText = '';
  }


  ngOnInit(): void {
  }

}
