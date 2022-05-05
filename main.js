function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let option = options[Math.floor((Math.random() * options.length))];
    // console.log(option);
    return option

};
let score = 0;
function play(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    player = player.charAt(0).toUpperCase() + player.slice(1);


    let text;
   

    if (player == 'Paper' && computer == 'Rock') {
        text = `You won! User played ${player} and computer played ${computer}.`;
        score +=1;

    } else if (player == 'Paper' && computer == 'Scissors') {
        text = `You lost! User played ${player} and computer played ${computer}`;
        score -=1;
    } else if (player == 'Rock' && computer == 'Scissors') {
        text = `You won! User played ${player} and computer played ${computer}`;
        score +=1;
    } else if (player == 'Rock' && computer == 'Paper') {
        text = `You lost! User played ${player} and computer played ${computer}`;
        score -=1;
    } else if (player == 'Scissors' && computer == 'Paper') {
        text = `You won! User played ${player} and computer played ${computer}`;
        score +=1;
    } else if (player == 'Scissors' && computer == 'Rock') {
        text = `You lost! User played ${player} and computer played ${computer}`;
        score -=1;
    } else if (player == 'Paper' && computer == 'Rock') {
        text = `You lost! User played ${player} and computer played ${computer}`;
        score -=1;

    } else if (player == computer) {
        text = `A draw user played ${player} and computer played ${computer}`;
    } else {
        text = 'Wrong input';
    }
    // console.log(player);
    // console.log(computer);

    // console.log(text)

    return text;


};



// let playerSelection = prompt('Please enter Rock, Paper, or Scissors');
// let computerSelection = computerPlay();
//console.log(play(playerSelection, 'Rock'));

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Please enter Rock, Paper, or Scissors');
    let computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(play(playerSelection, computerSelection));
    console.log(score);

}