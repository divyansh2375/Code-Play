
document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("box");
    const up =  document.getElementById("up-button");
    const down = document.getElementById("down-button");
    let currentPosition = 0;
    const step = 100;

  
    function moveUp(){
        currentPosition -= step
        box.style.top = currentPosition + "px";
    
    }
    function moveDown() {
        currentPosition += step;
        box.style.top = currentPosition + "px";
        
    }
up.addEventListener("click",moveUp)
down.addEventListener("click",moveDown)

})    
// document.addEventListener("DOMContentLoaded", function() {
//     const box = document.getElementById("box");
//     const upButton = document.getElementById("up-button");
//     const downButton = document.getElementById("down-button");
//     let currentPosition = 0;
//     const step = 100; // Adjust this value to change the movement step size
  
//     function moveUp() {
//       currentPosition -= step;
//       box.style.top = currentPosition + "px";
//     }
  
//     function moveDown() {
//       currentPosition += step;
//       box.style.top = currentPosition + "px";
//     }
  
//     // Event listeners for button clicks
//     upButton.addEventListener("click", moveUp);
//     downButton.addEventListener("click", moveDown);
//   });
  