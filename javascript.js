const game = () =>{
    const selected = document.querySelector('input[name="game"]:checked')
    
    let user_input = selected.value

    let index = getRandomInteger(0 ,2)
    let game_value = ["Rock", "Paper", "Scissor"]

    let computer_generated = game_value[index]
    console.log(computer_generated)

    if(user_input == "Rock" && computer_generated == "Scissors"){
        alert("You win !!")
    }
    else if(user_input == "Paper" && computer_generated =="Rock"){
        alert("You win !!")
    }
    else if(user_input == "Scissors" && computer_generated == "Paper"){
        alert("You win !!")
    }
    else if(user_input == computer_generated){
        alert("Its a Draw")
    }
    else{
        alert("You lose")
    }

    console.clear()
}
const getRandomInteger = (min, max)=> { //to generate a random number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}