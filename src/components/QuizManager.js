import {birdsData} from "../../assets/db/data.js";

export class QuizManager {
    constructor(){
        this.currentCategory = 0;
        this.cunrrentBird = null;

    }

    startQuiz(){
        this.initQuestion();
    }

    initQuestion(){
        const categoryBird = birdsData[this.currentCategory];
        const randomNumber = Math.floor(Math.random() * 
        categoryBird.length);
        this.cunrrentBird = categoryBird[randomNumber];

        console.log(this.cunrrentBird);
        
        
    }
}