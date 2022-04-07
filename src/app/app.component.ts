import { Component } from '@angular/core';
import { Goal } from './goal';
import { School } from './school';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'Okello is the guy and he just come and saw me now';
  // goal = 'Watch Finding Nemo';
  // partingShort = 'Sure Okello';

  // // implementing an array
  // goals:string[];

  // schools:string[];
  
  // // the last array:

  // Scores:number[];
  // // this is the array declararing in .ts extension and the accompaning constructor implementation.
  // Close:any[];


    // the one for schools
    schools:School[] = [
      new School(1,'Kanga','Kanga is my school ohh,',new Date(2022,4,14)),
      new School(1,'Lenana','Lenana is a good school,',new Date(2023,4,14)),
      new School(2,'Rapogi','Rapogo was a wow!',new Date(2019,6,9)),
      new School(3,'Owinyo','Just a perfect humble schoool',new  Date(2030,3,14)),];

      toggleDetails(index:any){
        this.schools[index].showDescription = !this.schools[index].showDescription
      }

      completeSchool(isComplete:any, index:any){
        if(isComplete){
          this.schools.splice(index,1);
        }
      }

      schoolDelete(isComplete: any,index: any){
        if(isComplete){
          let toDelete = confirm(`Are you sure you want to delete ${this.schools[index].name}?`);
          if(toDelete){
            this.schools.splice(index,1);
          }
        } 
      }

      addNewSchool(school: any){
        let goalLength = this.schools.length;
        school.id = goalLength+1;
        school.completeDate = new Date(school.completeDate)
        this.schools.push(school)
      }
  constructor(){
    // this.schools = ['kanga','kuria','kenya','migori'];
    // this.Scores = [2,4,20,29,2,202];
    // this.Close = [2,'strong',9,'Okello'];
  }

}
