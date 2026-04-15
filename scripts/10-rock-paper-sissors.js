  let result ='';
    let score = JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            Ties : 0
        };

    /*
    if(!score){
        score= {
            wins:0,
            losses:0,
            Ties : 0
        };

    }
    */

   

    updateScoreElement();

   

    
    function updateScoreElement(){
            document.querySelector('.js-scores')
        .innerHTML= ` Wins:${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`
    }

    
    function resetScore(){
        score.wins=0,
        score.Ties=0,
        score.losses=0;
        localStorage.removeItem('score');
        updateScoreElement();

    };

    function playGame(playerMove){
    const computerMove = pickComputerMove();

    if (playerMove==='scissors'){
        if (computerMove==='rock') {
            result='You Lose.'
        }
        else if (computerMove==='paper'){
            result='You win.'
        }
        else if (computerMove==='scissors'){
            result='Tie.'
        }
    }

    else if(playerMove==='paper'){
            if (computerMove==='rock') {
                result='You win.'
            }
            else if (computerMove==='paper'){
                result='Tie.'
            }
            else if (computerMove==='scissors'){
                result='You Lose.'
            }
        
    }

    else if(playerMove==='rock'){
        console.log(computerMove)
        if (computerMove==='rock'){
            result='Tie.'
        }
        else if (computerMove==='paper'){
            result='You Lose.'
        }
        else if (computerMove==='scissors'){
            result='You win.'
        }

    }

    if(result==='You win.'){
        score.wins += 1
    } else if (result==='Tie.'){
        score.Ties+=1
    } else if (result==='You Lose.'){
        score.losses+=1
    };

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

     document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
    .innerHTML = `You 
    <img src="emojis/${playerMove}-emoji.png" > <img src="emojis/${computerMove}-emoji.png" alt="">Computer`;


}
    


    function pickComputerMove(playerMove){
        let computerMove='';
        const randomNumber = Math.random();

        if (randomNumber>=0 && randomNumber<=1 / 3) {
            computerMove = 'rock'
        }
        else if(randomNumber>1 /3 && randomNumber<= 2/3){
            computerMove = 'paper'
        }
        else if(randomNumber>2/3 && randomNumber<= 1){
            computerMove = 'scissors'
        }
        return computerMove;
    }
