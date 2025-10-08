const gamelogic =  () =>{
    const selected = document.querySelector('input[name="game"]:checked');
    
    let user_input = selected.value;

    let index = getRandomInteger(0 ,2);
    let game_value = ["Rock", "Paper", "Scissor"];

    let computer_generated = game_value[index];
    console.log(computer_generated);
    if((user_input == "Rock" && computer_generated == "Scissor") || (user_input == "Paper" && computer_generated =="Rock") || (user_input == "Scissor" && computer_generated == "Paper")){
        document.querySelector("#win").style.display = "flex";
        document.getElementById('win').classList.add('.highlight')
    }
    else if(user_input == computer_generated){
        alert("Its a Draw");
    }
    else{
        alert("You lose");
    }

    console.clear();
}


const closewindow =  () =>{
    document.querySelector("#win").style.display = "none";
    document.body.classList.remove()
}

const getRandomInteger = (min, max)=> { //to generate a random number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
