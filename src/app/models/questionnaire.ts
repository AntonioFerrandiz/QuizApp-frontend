import { Question } from "./question";

export class Questionnaire{
    id?: number;
    name: string;
    description: string;
    dateCreated: Date;
    questionsList: Question[];

    constructor(name: string, description: string, dateCreated: Date, questionList: Question[]){
        this.name = name;
        this.description = description;
        this.dateCreated = dateCreated;
        this.questionsList = questionList;
    }
}