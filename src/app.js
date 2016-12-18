console.log('App.js is connected');
//Putting questions into an array
let Questions = [
   new Question('Which player blew a 3-1 lead in the most important game of his career?' , ['Steph Curry', 'Anthony Davis', 'Steph Curry', 'James Harden'] , 'Steph Curry'),
   new Question('Who is the most overrated MVP in NBA history?' , ['Steph Curry', 'Lebron James', 'Steph Curry', 'Kobe Bryant'] , 'Steph Curry'),
   new Question('Who was the true MVP of the 2015-2016 NBA season?' , ['LeGOAT James', 'Steph Curry', 'James Harden', 'Anthony Davis'] , 'LeGOAT James'),
   new Question('Which player can average 30, but still lose by 20?' , ['Anthony Davis', 'Kevin Durant', 'Demarcus Cousins', 'Mark Gasol'] , 'Anthony Davis'),
   new Question('On the day of his retirement, which of these players scored 60?' , ['Kobe Bryant', 'Kevin Garnet', 'Michael Jordan', "Shaquille O'Neal"] , 'Kobe Bryant'),
   new Question("Which of these players led his team down from a 3-1 deficit to stage the greatest comeback in NBA and sport's history?" , ['LeGreatest James', 'Kevin Durant', 'Charles Barkeley', 'Kobe Bryant'] , 'LeGreatest James'),
   new Question("Who did the Golden State Warriors defeat in the 2016 WCF?" , ['OKC Thunder', 'Spurs', 'LA Clippers', 'Houston Rockets'] , 'OKC Thunder'),
   new Question("Which of these NBA superstars shocked the Basketball world by going to the team that defeated him in NBA free agency? This move was called the weakest an NBA superstar has ever made, by, ESPN reporter, Stephen A Smith."
   , ['Kevin Durant', 'Pau Gasol', 'Chris Paul', 'Blake Griffin'] , 'Kevin Durant'),
   new Question("Which team had the greatest regular season record AND won a ring?" , ['Phoenix Suns', 'Chicago Bulls', 'Golden State Warriors', 'Los Angeles Lakers'] , 'Chicago Bulls'),
   new Question("This player was called, 'The Answer.'" , ['Allen Iverson', 'Tim Duncan', 'Kobe Bryant', 'Kevin Durant'] , 'Allen Iverson'),
]

//Creating a Player
let Player1 = new Player(0, 59);
//Creating computer
let Computer1 = new Computer(0, 15);

//End Game Screen - Restart Game
function endStartNew() {
    //Hiding Quiz Questions + Timer,
    $('#options').velocity('slideUp', {duration:800});
    $('#question').velocity('slideUp', {duration:800});
    $('#timer').velocity('slideUp', {duration:800});
    $('#clock>h3').velocity('slideUp', {duration:800});
    //making try again button appear
    $('#tryAgain').toggle();
    if(Player1.score>Computer1.score) {
      alert('You have defeated the Comptuer');
    }
    if(Player1.score==Computer1.score) {
      alert('You have tied the Comptuer');
    }
    else if(Player1.score<Computer1.score) {
      alert('The computer has beaten you!')
    }

}


//printing Question 1
printQA(0);
//Outputting Initial Score
$('#playerScore').html(Player1.score);
$('#computerScore').html(Computer1.score);
