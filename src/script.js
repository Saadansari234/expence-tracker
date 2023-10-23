let previousDate = document.getElementById("previous-date")

previousDate.addEventListener("click", () => {
   let previousInput = document.getElementById("previous-input")
   let faChevron = document.getElementById("fa-chevron")


   if (previousInput.style.display == "" && faChevron.style.rotate == "") {
      previousInput.style.display = "block";
      faChevron.style.rotate = "calc(270deg)"
   } else {
      previousInput.style.display = "";
      faChevron.style.rotate = ""
   }


})

// making an array to store all the expences
var AllExpenses = []

var totalIncomeAmount = Number(document.getElementById("total-income-amount").textContent);


// calling expence form

let faPlus = document.getElementById("fa-plus")

faPlus.addEventListener("click", () => {
   let expenceForm = document.getElementById("expence-form")

   if (expenceForm.style.display == "") {
      expenceForm.style.display = "flex"
   }

   // cancalling the form 
   let cancelBtn = document.getElementById("exp-cancel-btn")

   cancelBtn.addEventListener("click", () => {
      if (expenceForm.style.display == "flex") {
         expenceForm.style.display = ""
      }
   })


   // appending value in the page from input

   let expenceBtn = document.getElementById("expence-btn")

   expenceBtn.addEventListener("click", () => {

      let expenceType = document.getElementById("expence-type").value;
      let expenceAmt = Number(document.getElementById("expence-amt").value)
      let expenceList = document.getElementById("expence-list");
      let h4 = document.createElement("h4")
      let p = document.createElement("p")
      let div = document.createElement("div")
      let expencelists = document.createElement("section")

      expencelists.appendChild(h4)
      expencelists.appendChild(p)
      expencelists.appendChild(div)


      let catagoryElem = document.createTextNode(`Catagory: ${expenceType}`);
      let AmountElem = document.createTextNode(`Rs.${expenceAmt}`)
      let cancelElem = document.createTextNode(`Delete`)



      if (expenceForm.style.display == "flex") {
         expenceForm.style.display = "";
         h4.appendChild(catagoryElem)
         p.appendChild(AmountElem)
         div.appendChild(cancelElem)
         expenceList.appendChild(expencelists)
         AllExpenses.push(expenceAmt)

         // Calculate the total expense amount after adding expenses
         let totalExpAmount = document.getElementById("total-exp-amount");
         let expensesCount = AllExpenses.reduce(getSum, 0);
         totalExpAmount.innerText = `Rs.${expensesCount}`


         // Calculate the total amount after subtracting expenses from income
         let totalAmount = document.getElementById("total-amount");

         let total = totalIncomeAmount - expensesCount;
         totalAmount.innerText = `Rs.${total}`;


      }
   })

})


function getSum(total, num) {
   return total + Math.round(num);
}




// adding deposit button even to add deposit in income
let Deposit= document.getElementById("deposit")

Deposit.addEventListener("click", ()=>{

   let incomeForm= document.getElementById("income-form")
   let incomeCancelBtn= document.getElementById("income-cancel-btn")
   let incomeBtn = document.getElementById("income-btn");
   if (incomeForm.style.display=="") {
      incomeForm.style.display="flex"
   }

   incomeCancelBtn.addEventListener("click", ()=>{

      if (incomeForm.style.display=="flex") {
         incomeForm.style.display="";
      }
   })

   incomeBtn.addEventListener("click", ()=>{

      var totalIncome=0;

      if (incomeForm.style.display=="flex") {
         incomeForm.style.display="";
let incomeAmt = parseInt(document.getElementById("income-amt").value);
    
    // Get the current total income from the "total-income-amount" element
   //  let totalIncomeAmount = document.getElementById("total-income-amount");
   let currentTotalAmount = parseInt(totalIncomeAmount.innerText);
    
    // Calculate the new total income
    let newTotalIncome = currentTotalAmount + incomeAmt;
    
    // Update the "total-income-amount" element with the new total income
    totalIncomeAmount.innerText = `Rs.${newTotalIncome}`;
      }
   })


})


