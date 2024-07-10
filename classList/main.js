
const button = document.getElementById("MyButton") ;

button.classList.add("enbled") ;

// button.classList.remove("enbled") ;

button.addEventListener ("mouseenter" , event =>  {
    event.target.classList.toggle("hover")
    // event.target.classList.add("hover")
})
button.addEventListener ("mouseout" , event =>  {
    event.target.classList.toggle("hover")
    // event.target.classList.remove("hover")
})
