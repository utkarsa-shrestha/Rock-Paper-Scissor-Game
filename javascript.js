const gamelogic =  () =>{ //game logic function
    const overlay = document.querySelector('.overview') //local const 


    const selected = document.querySelector('input[name="game"]:checked');
    
    let user_input = selected.value;

    let index = getRandomInteger(0 ,2);
    let game_value = ["Rock", "Paper", "Scissor"];

    let computer_generated = game_value[index];
    console.log(computer_generated);

    document.querySelector(".overview").style.display = "block"; //the dimming of the background

    if((user_input == "Rock" && computer_generated == "Scissor") || (user_input == "Paper" && computer_generated =="Rock") || (user_input == "Scissor" && computer_generated == "Paper")){
        document.querySelector("#win").style.display = "flex";  //display the panel
        document.querySelector(".confetti-container").style.display = "block"; //confetti animation
    }
    else if(user_input == computer_generated){
        document.querySelector('#draw').style.display = "flex"; //display the panel
        document.querySelector(".draw-container").style.display = "block" //draw animation
    }
    else{
        document.querySelector('#lose').style.display = "block"; //display the panel
        document.querySelector(".lose-container").style.display = "block"//lose animation
    }


}

const closewindow =  () =>{ //function to close panel
    
    const overlay = document.querySelector('.overview');//another local const

    document.querySelector("#win").style.display = "none"; //remove the of win panel
    document.querySelector('#lose').style.display = "none"; //remove the lose panel
    document.querySelector("#draw").style.display = "none"; //remove the draw panel
    document.querySelector('.overview').style.display = "none"; //removed the dimming
    document.querySelector(".confetti-container").style.display = "none"//removed the cofetti animation
    document.querySelector(".lose-container").style.display = "none"//remode the lose animation
    document.querySelector(".draw-container").style.display = "none"//removed the draw animation
}

const getRandomInteger = (min, max)=> { //to generate a random number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
