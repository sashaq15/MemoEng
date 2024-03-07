import App from "../App";
import React from "react";
import { useEffect } from "react";

const Result = (props) => {
    const {data, correctAnswer,incorrectAnswer,setShowWordPage} = props;

    const correctArrEng = [];
    const correctArrRus = [];
    const correctArrTranscr = [];

    const incorrectArrEng = [];
    const incorrectArrRus = [];
    const incorrectArrTranscr = [];

    setShowWordPage(false);

    console.log(incorrectAnswer);
   

    if(data.engWords) {

        const incorrectAnswerSet = Array.from(new Set(incorrectAnswer));
        console.log(incorrectAnswerSet);

        for(let i = 0; i < incorrectAnswerSet.length; i++) {
            incorrectArrEng[i] = data.engWords[incorrectAnswerSet[i]];
            incorrectArrRus[i] = data.rusWords[incorrectAnswerSet[i]];
            incorrectArrTranscr[i] = data.transcripton[incorrectAnswer[i]];
        }

    
        for(let i = 0; i <correctAnswer.length; i++) {
        correctArrEng[i] = data.engWords[correctAnswer[i]];
        correctArrRus[i] = data.rusWords[correctAnswer[i]];
        correctArrTranscr[i] = data.transcripton[correctAnswer[i]];
        }

    }


    return(
        <div>
            <h1>Поздравляем!У вас {correctAnswer.length} ответов из {data.engWords ? data.engWords.length : null} </h1>
            <img src="https://img.freepik.com/premium-vector/success-at-the-top-leadership-to-reach-business-goal-career-success-or-assigned-tasks-contest-winner-a-young-man-or-businessman-raises-a-flag-on-a-high-mountain-peak_327176-1051.jpg" alt="" />
            <h2>Неправильные ответы:</h2>
            <div className="resultContent"> 
                <div className="resultContent__incorrectRow">
                {incorrectArrEng.map((item, i) => <li key={i} className="incorrect" >{item}</li>)}
                </div>
                
                <div className="resultContent__incorrectRow">
                 {incorrectArrTranscr.map((item, i) => <li key={i} className="incorrect" >{item}</li>)}
                </div>

                <div className="resultContent__incorrectRow">
                 {incorrectArrRus.map((item, i) => <li key={i} className="incorrect" >{item}</li>)}
                </div>

            </div>

            <h2>Правильные ответы:</h2>
            <div className="resultContent"> 
                <div className="resultContent__correctRow">
                {correctArrEng.map((item, i) => <li key={i} className="correct" >{item}</li>)}
                </div>

                <div className="resultContent__correctRow">
                 {correctArrTranscr.map((item, i) => <li key={i} className="correct" >{item}</li>)}
                </div>

                <div className="resultContent__correctRow">
                 {correctArrRus.map((item, i) => <li key={i} className="correct" >{item}</li>)}
                </div>

            </div>

         
            <a href="./">
                <button  className ="button">Try again</button>
            </a>
        </div>
    )
}

export default Result;