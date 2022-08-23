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

    btn.disabled = true;
    alert("You have already selected 5!");
    return playerArray.length = 5;
}
    
}
// common function for getting text value
function getValue(idName){
    const field = document.getElementById(idName);
    const value = parseFloat(field.value);
    if(value>0){
        return value;
    }
    else{
        alert('Please Enter valid data');
    }
}
// common function for getting inner input field value 
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
if(costPerPlayer>0){
    var playerExpense = costPerPlayer*playerArray.length;
    const totalPlayerExpenseField = document.getElementById('total');
    totalPlayerExpenseField.innerText = playerExpense;
}
else{
    alert('Please Enter valid data');
    var playerExpense = costPerPlayer*playerArray.length;
    const totalPlayerExpenseField = document.getElementById('total');
    totalPlayerExpenseField.innerText = 0;
}   
})



// For Calculate Total button 
document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const managerAmount = getValue('manager-amount');
    const coachAmount = getValue('coach-amount');
    const managerAndCoach = managerAmount+coachAmount;

    const totalAmount = getInnerTextValue('total')
    const totalFinal = totalAmount+ managerAndCoach;
    let finalResult = isNaN(totalFinal);
    if(finalResult== true){
        const totalPlayerExpenseField = document.getElementById('totalPlayerExpense');
    totalPlayerExpenseField.innerText = 0;
    }
else{
    const totalPlayerExpenseField = document.getElementById('totalPlayerExpense');
    totalPlayerExpenseField.innerText = totalFinal;
}

})