import { style } from '@angular/animations';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { School } from '../school';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css'],
  styles:['h6 {color:red; background-color:blue; text-weight:bolder; font-size:29px}']
})
export class SchoolFormComponent implements OnInit {

  newSchool = new School(0,'','',new Date());

  @Output() addSchoool = new EventEmitter<School>();

  submitSchool(){
     this.addSchoool.emit(this.newSchool);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
