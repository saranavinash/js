function rollDice(){

    const numOfDices = document.getElementById("numOfDices").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    //generate random number

    for(let i = 0; i < numOfDices; i++){
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="dice_images/Dice-${value}.png" alt="Dice ${value}">`);    
    }
    diceResult.textContent =  `Dice: ${values}`;
    diceImages.innerHTML= images.join('');



}                              