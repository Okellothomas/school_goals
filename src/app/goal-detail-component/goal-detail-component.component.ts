import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
import { School } from '../school';

@Component({
  selector: 'app-goal-detail-component',
  templateUrl: './goal-detail-component.component.html',
  styleUrls: ['./goal-detail-component.component.css']
})
export class GoalDetailComponentComponent implements OnInit {

  @Input()
  goal!: Goal;
  @Input()
  school!: School;

  @Output() isComplete = new EventEmitter<boolean>();
  schoolComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  schoolDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

 

  ngOnInit(): void {
  }

}
