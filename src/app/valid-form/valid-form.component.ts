import { Component, OnInit } from '@angular/core';
import {DataForm} from './dataForm';

@Component({
  selector: 'valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {

  dataForm = new DataForm();

  constructor() { }

  ngOnInit() {

  }



}
