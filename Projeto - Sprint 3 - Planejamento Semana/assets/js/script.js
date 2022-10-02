let dropdownD = document.querySelector(".day-week");
let dropdownH = document.querySelector(".hour");
let optDay = document.querySelectorAll(".option-day");
let optHour = document.querySelectorAll(".option-hour");


dropdownD.addEventListener("click", function(event) {
    let drop = document.querySelector(".days-options");
    drop.classList.toggle('active');
})

dropdownH.addEventListener("click", function(event) { 
    let drop = document.querySelector(".hours-options");  
    drop.classList.toggle('active');
})

function pickDay(info) {
    document.querySelector(".chosen-day").innerText = info.innerText;
    document.querySelector(".days-options").classList.toggle('active');
}

function pickHour(info) {
    document.querySelector(".input__hour").value = info.innerText;
    document.querySelector(".hours-options").classList.toggle('active');
}