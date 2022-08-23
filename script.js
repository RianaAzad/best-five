const playerArray =[];

function displayPlayers(playerslist){
    const listItems = document.getElementById('list');
    listItems.innerHTML= "";
    const length = playerslist.length;
    for(let i=0 ; i<length; i++)
    {
        const name = playerslist[i];

        const tr = document.createElement('tr');
        tr.innerHTML=
        `
         <td>${i+1}</td>
         <td><span> &#160;&#160;&#160; </span>${name}</td>
         `
        listItems.appendChild(tr);
        const selectedNumber = document.getElementById('selected-number');
        selectedNumber.innerText = i+1;
    }
}


function addPlayer(players){
    const btn = players.parentNode.children[0];
    console.log(btn);
    btn.disabled= true;
const playerName = players.parentNode.parentNode.children[1].children[0].innerText;

playerArray.push(playerName);

if(playerArray.length<6){
    displayPlayers(playerArray);
}
else{
    alert("You have already selected 5!");
    btn.disabled = true;
    return playerArray.length = 5;
}
    
}
// common function for getting text value
function getValue(idName){
    const field = document.getElementById(idName);
    const value = parseFloat(field.value);
    return value;
}
// common function for getting inner text value 
function getInnerTextValue(element){
    const innertextfield = document.getElementById(element);
    const innerTextValue = parseFloat(innertextfield.innerText);
    return innerTextValue;
}


// calculation
// for calculate button 
document.getElementById('btn-calculate').addEventListener('click',function(){
    const costPerPlayerField = document.getElementById('costPerPlayer');
    const costPerPlayer = costPerPlayerField.value; 
    var playerExpense = costPerPlayer*playerArray.length;
    const totalPlayerExpenseField = document.getElementById('total');
    totalPlayerExpenseField.innerText = playerExpense;
})



// For Calculate Total button 
document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const managerAmount = getValue('manager-amount');
    const coachAmount = getValue('coach-amount');
    const managerAndCoach = managerAmount+coachAmount;

    const totalAmount = getInnerTextValue('total')
    const totalFinal = totalAmount+ managerAndCoach;

const totalPlayerExpenseField = document.getElementById('totalPlayerExpense');
totalPlayerExpenseField.innerText = totalFinal;
})