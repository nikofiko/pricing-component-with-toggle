const button = document.querySelector("input")

const price = document.querySelector(".price1")
const price2 = document.querySelector(".price2")
const price3 = document.querySelector(".price3")
let check = 0

// &dollar;199.99
// &dollar;24.99
// &dollar;399.99

button.addEventListener("click", ()=> {
    if(check === 0){
        check = 1
        price.innerHTML = "&dollar;199.99"
        price2.innerHTML = "&dollar;249.99"
        price3.innerHTML = "&dollar;399.99"
    }else if(check === 1){
        check = 0
        price.innerHTML = "&dollar;99.99"
        price2.innerHTML = "&dollar;24.99"
        price3.innerHTML = "&dollar;39.99"
    }
})