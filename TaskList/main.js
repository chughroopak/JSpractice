//Element declarations

const taskList = document.querySelector('#tasklist');
const loan = document.querySelector('#loan');
const number = document.querySelector('#number');

//Event listeners

loadEventListeners();

function loadEventListeners(){
    taskList.addEventListener('click', openTaskList);

    loan.addEventListener('click', openLoanCalculator);

    number.addEventListener('click',openNumberGuesser);
}

function openTaskList(e){
    window.location.href = './taskList.html'
}

function openLoanCalculator(){
    window.location.href = './loanCalculator.html'
}

function openNumberGuesser(){
    window.location.href = './numberGuesser.html';
}