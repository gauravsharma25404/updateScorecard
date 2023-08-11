var runs = 0
var wickets = 0
var overs = 0
var balls = 0
var actionButtons = []
document.addEventListener("DOMContentLoaded",() => {
    const divScore = document.getElementById("score")
    const divOvers = document.getElementById("over")

    const updateOver = () => {
        if(balls < 5)
        {balls++ ;}
        else
        {
            overs++ ;
            balls = 0 ;

            setCurrentRunRate();
        }

        divOvers.innerHTML = overs + `.` + balls ;
    }

    const buttonOne = document.getElementById("one") 
    const updateOne =  () => {
        runs += 1
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOver();
        actionButtons.pop();
        actionButtons.push(updateOne);
        // console.log(actionButtons.pop())
    }
    buttonOne.addEventListener("click",updateOne)


    const buttonTwo = document.getElementById("two") 
    const updateTwo =  () => {
        runs += 2
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOver();
        actionButtons.pop();
        actionButtons.push(updateTwo);
        // console.log(actionButtons.pop())
    }
    buttonTwo.addEventListener("click",updateTwo)


    const buttonThree = document.getElementById("three") 
    const updateThree =  () => {
        runs += 3
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOver();
        actionButtons.pop();
        actionButtons.push(updateThree);
        // console.log(actionButtons.pop())
    }
    buttonThree.addEventListener("click",updateThree)


    const buttonFour = document.getElementById("four") 
    const updateFour =  () => {
        runs += 4
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOver();
        actionButtons.pop();
        actionButtons.push(updateFour);
        // console.log(actionButtons.pop())
    }
    buttonFour.addEventListener("click",updateFour)


    const buttonFive = document.getElementById("five") 
    const updateFive =  () => {
        runs += 5
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOver();
        actionButtons.pop();
        actionButtons.push(updateFive);
        // console.log(actionButtons.pop())
    }
    buttonFive.addEventListener("click",updateFive)


    const buttonSix = document.getElementById("six") 
    const updateSix =  () => {
        runs += 6
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOver();
        actionButtons.pop();
        actionButtons.push(updateSix);
        // console.log(actionButtons.pop())
    }
    buttonSix.addEventListener("click",updateSix)


    const buttonZero = document.getElementById("zero") 
    const updateZero =  () => {
        runs += 0
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOver();
        actionButtons.pop();
        actionButtons.push(updateZero);
        // console.log(actionButtons.pop())
    }
    buttonZero.addEventListener("click",updateZero)

    
    const buttonOut = document.getElementById("out") 
    const updateOut =  () => {
        wickets += 1
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOver();
        actionButtons.pop();
        actionButtons.push(updateOut);
    }
    buttonOut.addEventListener("click",updateOut)


    const buttonWide = document.getElementById("wide") 
    const updateWide =  () => {
        runs += 1 ;
        divScore.innerHTML = runs + ` - ` + wickets;
        actionButtons.pop();
        actionButtons.push(updateWide);
    }
    buttonWide.addEventListener("click",updateWide)


    const buttonUndo = document.getElementById("undo") 
    const updateUndo =  () => {
        let lastPushedButton = actionButtons.pop();

        
            const divScore = document.getElementById("score")
            const divOvers = document.getElementById("over")

            const updateUndoOver = () => {
                if(balls > 0)
                {balls-- ;}
                else
                {
                    overs-- ;
                    balls = 5 ;
                }

                divOvers.innerHTML = overs + `.` + balls ;
            }

            const reUpdateZero = () => {    
                const updateUndoZero =  () => {
                    runs -= 0
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateUndoOver();
                updateUndoZero();
            }

            const reUpdateOne = () => {    
                const updateUndoOne =  () => {
                    runs -= 1
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateUndoOver();
                updateUndoOne();
            }

            const reUpdateTwo = () => {    
                const updateUndoTwo =  () => {
                    runs -=  2;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateUndoOver();
                updateUndoTwo();
            }

            const reUpdateThree = () => {    
                const updateUndoThree =  () => {
                    runs -= 3 ;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateUndoOver();
                updateUndoThree();
            }

            const reUpdateFour = () => {    
                const updateUndoFour =  () => {
                    runs -= 4 ;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateUndoOver();
                updateUndoFour();
            }

            const reUpdateFive = () => {    
                const updateUndoFive =  () => {
                    runs -= 5 ;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateUndoOver();
                updateUndoFive();
            }

            const reUpdateSix = () => {    
                const updateUndoSix =  () => {
                    runs -= 6 ;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateUndoOver();
                updateUndoSix();
            }

            const reUpdateOut = () => {    
                const updateUndoOut =  () => {
                    wickets -= 1;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateUndoOver();
                updateUndoOut();
            }

            const reUpdateWide = () => {  
                const updateUndoWide =  () => {
                    runs -= 1;
                    divScore.innerHTML = runs + ` - ` + wickets; 
                }
                updateUndoWide();
            }







        switch(lastPushedButton){
            case updateZero :
                {
                    reUpdateZero();
                    break;
                }
                
            case updateOne :
                {
                    reUpdateOne();
                    break;
                }
            case updateTwo :
                {
                    reUpdateTwo();
                    break;
                }
            case updateThree :
                {
                    reUpdateThree();
                    break;
                }
            case updateFour :
                {
                    reUpdateFour();
                    break;  
                }
            case updateFive :
                {
                    reUpdateFive();
                    break;     
                }
            case updateSix :
                {
                    reUpdateSix();
                    break;
                }
            case updateOut :
                {
                    reUpdateOut();
                    break;
                }
            case updateWide :
                {
                    reUpdateWide();
                    break;
                }
            case updateOut :
                {
                    reUpdateOut();
                    break;
                }
        }
    }
    buttonUndo.addEventListener("click",updateUndo)

})

var setCurrentRunRate = () => {
    let currentRunRate = runs / overs ;
    console.log(currentRunRate);
    const RunRate = document.getElementById("currentRate")
    RunRate.innerHTML = currentRunRate;
}


