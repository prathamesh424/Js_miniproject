
const result =  (document.getElementById("result")) ;
const params =  document.getElementById("NumInput") ;
const ToFaheranheit = document.getElementById("ToFaheranheit") ;
const ToCelcius = document.getElementById("ToCelcius") ;
let temp = Number(params.value);

function convert () {
    if (ToFaheranheit.checked) {
        temp =  ( temp * (9/5)) + 32 ;
        result.textContent = `${temp} °F`
    }
    else  if (ToCelcius.checked) {
        temp = (5/9 *  temp- 32) ;
        result.textContent = `${temp}°C`
    }
    else {
        result.textContent = "Select The required unit" ; 
    }
}
