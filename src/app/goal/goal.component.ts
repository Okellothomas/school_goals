import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    {id:1, name:'Watch finding Nemo',description:'Nemo is a great and skillful git'},
    {id:2,name:'Buy Cookies', description:'Cookies will aid you in arranging yourself together'},
    {id:3,name:'Get new Phone Case', description:'new phones are my favorites!'},
    {id:4,name:'Get Dog Food',description:'Dog food not good for your life'},
    {id:5,name:'Solve math homework',description:'I bet now should do some home work'},
    {id:6,name:'Plot my world domination plan', description:'sure come one do it now'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
