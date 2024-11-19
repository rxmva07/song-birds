import { EventHandler } from "./song-birds/components/EventHandler.js";
import{ QuizManager } from "./song-birds/components/QuizManager.js"

const quizManager = new QuizManager();
const eventHanderler = new EventHandler(quizManager);
eventHanderler.init()