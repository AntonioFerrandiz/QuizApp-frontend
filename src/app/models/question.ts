import { Answer } from "./answer";

export class Question{
    description: string;
    answerList: Answer[];
    hide?: boolean;

    constructor(description: string, answerList: Answer[]){
        this.description = description;
        this.answerList = answerList;
    }
}