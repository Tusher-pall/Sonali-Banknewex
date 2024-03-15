const submit = document.getElementById("button");
submit.addEventListener("click",function(){
    const loginpage = document.getElementById("login-page")
    loginpage.style.display ="none"
    
    const transactionArea = document.getElementById("transaction-area")
    transactionArea.style.display ="block"
    // const background = document.getElementById("body")
    // background.style.backgroundColor ="white"
    // const none = document.getElementById("body")
    // none.style.display ="none"
})
const button = document.getElementById("button1");
button.addEventListener("click",function(){

const input = document.getElementById("input1").value;
const depositNumber = parseFloat(input);

const currentPlus = document.getElementById("currentAdd").innerText;
const currentDepositNumber = parseFloat(currentPlus);

const TotalDeposit = depositNumber + currentDepositNumber;
document.getElementById("currentAdd").innerText =TotalDeposit;
document.getElementById("input1").value = ""

const balance = document.getElementById("balance1").innerText;
const balance1 = parseFloat(balance);


const totalBalance =balance1 + depositNumber;
document.getElementById("balance1").innerText = totalBalance;
// console.log(totalBalance)
} 
)

const buttonEx = document.getElementById("button2");
buttonEx.addEventListener("click",function(){
    const input2 = document.getElementById("input2").value;
    const inputParse = parseFloat(input2);

    const withdraw2 = document.getElementById("withdraw2").innerText;
    const withdrawParse = parseFloat(withdraw2);
     
    const totalWithdraw = inputParse + withdrawParse;

    document.getElementById("withdraw2").innerText = totalWithdraw;
   

    const balance2 = document.getElementById("balance1").innerText;
    const balance3 = parseFloat(balance2);

    const balanceMinus = totalWithdraw - balance3;

    document.getElementById("balance1").innerText = balanceMinus;

    document.getElementById("input2").value = "";
})
