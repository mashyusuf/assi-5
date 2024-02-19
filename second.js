function HideElementById(elementId){
    const element = document.getElementById(elementId);
   // element.classList.add('hidden')
}
function ShowElemnetById(elementId){
    const element = document.getElementById(elementId)
    //element.classList.remove('hidden')
}





const selectedTickets = [];

let totalSeatLeft = 8;
let bookedSeat = 0;
let totalPrice = 0;
let grandTotalPrice = 0;
document.getElementById("booked-seat").innerText = bookedSeat;
document.getElementById("total-seat").innerText = totalSeatLeft;
document.getElementById("total-price").innerText = totalPrice;
document.getElementById("grand-total-price").innerText = grandTotalPrice;
function handleClick(e) {
  const value = e.textContent;
  if (selectedTickets?.length < 4) {
    selectedTickets.push(value);
    e.classList.add("bg-green-500");
    totalSeatLeft--;
    bookedSeat++;
    totalPrice += 550;
    grandTotalPrice += 550;
    document.getElementById("booked-seat").innerText = bookedSeat;
    document.getElementById("total-seat").innerText = totalSeatLeft;
    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("grand-total-price").innerText = grandTotalPrice;
  }
}







/*function changeColor(buttonId) {
    let button = document.getElementById(buttonId);
    if (button.style.backgroundColor === "green") {
      button.style.backgroundColor = "white";
    } else {
      button.style.backgroundColor = "green";
    }
  }*/
  




 





  
  


  
  