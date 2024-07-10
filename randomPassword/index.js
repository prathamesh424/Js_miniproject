
const len = Number (window.prompt("Enter A len of Passward:- "))
const lower = true ;
const upper = true ;
const number = true ;
const symbol = true ;

function genPassword (len ,lower , upper , number , symbol)  {
    const lowercase = "abcdefghijklmnopqurstuvwxyz" ;
    const  uppercase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ" ;
    const  numbers = '0123456789' ;
    const symbols = "!{}[]()@#$%^&*_-+/~`'" ;

    let allowedchars = "" ;
    let passward= "" ;

    allowedchars += lower ? lowercase : "" ;
    allowedchars += upper ? uppercase : "" ;
    allowedchars += number ? numbers : "" ;
    allowedchars += symbol ? symbols : "" ;


    if (len <= 0) return `len should be at least 1`;
    if  (allowedchars.length === 0) return `allow at least 1 parameter ` ;

    for (let i = 0; i < len; i++) {
        const random = Math.floor(Math.random() * allowedchars.length )
        passward += allowedchars[random] ;
    }
    return passward ;

}
const Passward = genPassword (len , lower , upper ,number , symbol ) ;

console.log (`Genrated passward : ${Passward}`) ;
