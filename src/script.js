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

let AllExpences=[]


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
         AllExpences.push(expenceAmt)
      }


      
   })
   
   
   
})


// counting total expences made for that day

let total_expences_count=0;

for (let i = 0; i < AllExpences.length; i++) {
   total_expences_count += AllExpences[i]
   
   console.log(total_expences_count)
}
