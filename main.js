window.addEventListener("load", () => {

// let counter = 0;
const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", () => {
  display.dispatchEvent(new Event("add"));
});



display.addEventListener("add",(e)=>{
  e.preventDefault();
  // counter++;
  // if(counter>2){
  //   return alert("For now , only two can be added at once ! ");
  // }

  // create the card div
  const newCard = document.createElement("div");
  newCard.classList.add("newcard");

  // add the input fields to the card
  newCard.innerHTML = `
    <input type="text" name="title" id="title" placeholder="Enter Note Title">
    <input type="datetime-local" name="datetime" id="datetime" >
    <textarea name="description" id="description" cols="20" rows="10" placeholder="description goes here ......"></textarea>
    <button class="remove">x</button>
  `;

  // append the card to the display
  display.appendChild(newCard);

  const button = newCard.querySelector('.remove');
button.addEventListener('click',(e)=>{
  e.preventDefault();


  // Use the remove() method to remove the element
  newCard.remove();
  // counter--;
})

});



//dragging options to card & newcard



// const card = document.querySelector('.newcard');

// function drag({movementX,movementY}){
//   let getstyle=window.getComputedStyle(card)
//   let left = parseInt(getstyle.left)
//   let top = parseInt(getstyle.top);
//   card.style.left = `${left = movementX}px`
//   card.style.top = `${left = movementY}px`
// }

// card.addEventListener('mousedown',()=>{
//     card.addEventListener("mousemove",drag)   
//     card.classList.add("active");
// })
// card.addEventListener("mouseup",()=>{
//   card.removeEventListener("mousemove",drag)
//   card.classList.add("active")
// })
})


