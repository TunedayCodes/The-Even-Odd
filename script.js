// SETTING UP CLICK BUTTON EVENT

document.getElementById("check").addEventListener("click", checkIfEven);


// THIS CODE CHECKS IF THE NUMBER IS EVEN OR ODD AND DISPLAY RESULTS

function checkIfEven(){
   const number = parseInt(document.getElementById("num").value);
   const answer = isEven(number) ? "even" : "odd";
   console.log(answer);
   document.getElementById("output").textContent = `The number ${number} you picked is ${answer} !!`;

   function isEven(num){
      return (num % 2 == 0);
   }
}