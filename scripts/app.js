let nameDisplay = document.getElementById("nameDisplay");
let newNameDisplay = document.getElementById("newNameDisplay");
let lastNameDisplay = document.getElementById("lastNameDisplay");
let oneLastName = document.getElementById("oneLastName");
let twoLastName = document.getElementById("twoLastName");
let threeLastName = document.getElementById("threeLastName");
let fourLastName = document.getElementById("fourLastName");
let fiveLastName = document.getElementById("fiveLastName");
let oneNewName = document.getElementById("oneNewName");
let twoNewName = document.getElementById("twoNewName");
let threeNewName = document.getElementById("threeNewName");
let fourNewName = document.getElementById("fourNewName");
let fiveNewName = document.getElementById("fiveNewName");
let getDataBtn = document.getElementById("getDataBtn");
let createNameBtn = document.getElementById("createNameBtn");

let randomNumber = 0;
let randomNumber2 = 0;
let firstHalf;
let secondHalf;
let loop = 0;
let randomData;
let url;
let counter = 0;
let secondCounter = 0;
let displayedName;
let oneName = "";
let twoName = "";
let threeName = "";
let fourName = "";
let fiveName = "";
let displayedNewName;
let oneGeneratedName = "";
let twoGeneratedName = "";
let threeGeneratedName = "";
let fourGeneratedName = "";
let fiveGeneratedName = "";

function RNG(){
    randomNumber = Math.floor(Math.random(40) * 41); 
}

getDataBtn.addEventListener("click",function(){
    RandomNameSelector();
})

createNameBtn.addEventListener("click", function(){
    CreateName();
})


function CreateName(){
    RNG();
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    GetJson();
    firstHalf = randomData.Names[randomNumber].nameBeginning;
    console.log("First half is " + randomData.Names[randomNumber].firstName);
    RNG();
    GetJson();
    secondHalf = randomData.Names[randomNumber].nameEnding;
    console.log("Mixed with " + randomData.Names[randomNumber].firstName);
    
    if (secondCounter >= 5){
        fiveGeneratedName = fourGeneratedName;
    }
    if (secondCounter >= 4){
        fourGeneratedName = threeGeneratedName;
    }
    if (secondCounter >= 3){
        threeGeneratedName = twoGeneratedName;
    }
    if (secondCounter >= 2){
        twoGeneratedName = oneGeneratedName;
    }
    if (secondCounter >= 1){
        oneGeneratedName = displayedNewName;
    }
    
    displayedNewName = firstHalf + secondHalf;
    console.log("I present... " + displayedNewName + "!!");
    newNameDisplay.innerText = displayedNewName;
    oneNewName.innerText = "1. " + oneGeneratedName;
    twoNewName.innerText = "2. " + twoGeneratedName;
    threeNewName.innerText = "3. " + threeGeneratedName;
    fourNewName.innerText = "4. " + fourGeneratedName;
    fiveNewName.innerText = "5. " + fiveGeneratedName;
    secondCounter++;
}

function RandomNameSelector(){
    RNG();
    GetJson();

    if (counter >= 5){
        fiveName = fourName;
    }
    if (counter >= 4){
        fourName = threeName;
    }
    if (counter >= 3){
        threeName = twoName;
    }
    if (counter >= 2){
        twoName = oneName;
    }
    if (counter >= 1){
        oneName = displayedName;
    }

    displayedName = randomData.Names[randomNumber].firstName + " " + randomData.Names[randomNumber].lastName;
    console.log(randomData.Names[randomNumber].firstName);
    nameDisplay.innerText = displayedName;
    oneLastName.innerText = "1. " + oneName;
    twoLastName.innerText = "2. " + twoName;
    threeLastName.innerText = "3. " + threeName;
    fourLastName.innerText = "4. " + fourName;
    fiveLastName.innerText = "5. " + fiveName;
    counter++;
}

function GetJson() {
    fetch('../data/names.json').then(
        response => response.json()
    ).then(
        data => {
            randomData = data;
        })
    }