
const wheatherForm = document.querySelector( ".whetherForm");
const cityInput = document.querySelector( ".city");
const card = document.querySelector( ".container");

const API = "" ;
 wheatherForm.addEventListener("submit" , async event => {
    event.preventDefault() ;
    const city = cityInput.value ;
    if (city){
        try {
            const wData = await getData(city) ;
        } catch (error) {
            console.error(error) ;
            Error(error) ;
        }
    }
    else {
        Error ("Please Enter valid city !!")
    }
 })

 async function getData (city) {

 }

 function displayData (data) {

 }


 function getEmoji (weatherId){

 }

 function Error (meg) {
    const error = document.createElement("p") ;
    error.classList.add("errordis") ;
    card.textContent = "" ;
    card.style.display = "flex" ;
    error.textContent = meg ;
    card.appendChild() ;
 }