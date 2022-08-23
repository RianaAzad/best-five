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
         <td>${name}</td>
         `
        listItems.appendChild(tr);
    }
}

function addPlayer(players){
    const btn = players.parentNode.children[0];
    btn.disabled= true;
const playerName = players.parentNode.parentNode.children[1].children[0].innerText;

playerArray.push(playerName);

if(playerArray.length<6){
    displayPlayers(playerArray);
    const btn = document.getElementById('btn-select');
    
}
else{
    btn.disabled = true;
    alert("You have already selected 5!")
}
    
}


// calculation
// for calculate button 
document.getElementById('btn-calculate').addEventListener('click',function(){
    const costPerPlayerField = document.getElementById('costPerPlayer');
    const costPerPlayer = costPerPlayerField.value; 
    var playerExpense = costPerPlayer*playerArray.length;
    const totalPlayerExpenseField = document.getElementById('totalPlayerExpense');
    totalPlayerExpenseField.innerText = playerExpense;
    return playerExpense;
})
// For Calculate Total button 

document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const managerAmountField = document.getElementById('manager-amount');
    const managerAmount = parseFloat(managerAmountField.value);
    console.log(managerAmount);

    const coachAmountField = document.getElementById('coach-amount');
    const coachAmount = parseFloat(coachAmountField.value);
    console.log(coachAmount);
    const managerAndCoach = managerAmount+coachAmount;
    console.log(managerAndCoach);

    const totalField = document.getElementById('total');
    const totalAmount = parseFloat(totalField.innerText);
console.log(totalAmount);

const totalPlayerExpenseField = document.getElementById('totalPlayerExpense');
    const totalPlayerExpenseValue = parseFloat(totalPlayerExpenseField.innerText);

const totalFinal = totalAmount + totalPlayerExpenseValue + managerAndCoach;
console.log(totalFinal);
})