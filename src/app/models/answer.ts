export class Answer{
    id?: number;
    description: string;
    isCorrect: boolean;

    constructor(description: string, isCorrect: boolean, id?: number){
        this.id = id;
        this.description = description;
        this.isCorrect = isCorrect;
    }
}