import { Data } from "@angular/router";

export class School {
    showDescription: boolean;
    constructor(public id: number, public name: string, public description: string, public completeDate: Data){
        this.showDescription = false;
    }
}
