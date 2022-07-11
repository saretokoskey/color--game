const squares = document.querySelectorAll(".square");
const answerDisplay = document.querySelector(".correct");
const colorDisplay =document.querySelector("h1");
const button = document.querySelector("button");
let colours = [];
GenerateRandomColour();
assign_colours()
function GenerateRandomColour() {
for (let i = 0; i < squares.length; i++) {
    colours.push(
        `rgb(${Math.floor(Math.random() *255)},${Math.floor(
            Math.random() *255
            )},${Math.floor(Math.random() *255)},`
    )
}

function assign_colours() {
    colours.forEach((colour, index) => {
        squares[index].style.background = colour;
        squares[index].setAttribute("data_colour", colour)
    });
}
function GenerateRandomColour() {
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    coloursDisplay.textCotent = randomColour;
    return randomColour;
}
function CheckColour() {
     squares.forEach((squares) =>{
         square.addEventlistener("click", (e) =>{
             if(e.target.dataset.colour === pickedColour){
                 answerDisplay.textContent = "correct";
             } else {
                 answerDisplay.textContent = "wrong";
                 e.target.classList.add("fade");
             }
         })
     })
     }
     letpickedColour =GenerateRandomColour();
     function reset() {
         colours = [];
         GenerateRandomColour();
         squares.forEach((square) => square.classList.remove("fade"));
         assign_colours();
         checkcolour();
         pickedColour = getRandompickedColour();
     }

}
