let dropdownD = document.querySelector(".day-week");
let dropdownH = document.querySelector(".hour");
let optDay = document.querySelectorAll(".option-day");
let optHour = document.querySelectorAll(".option-hour");
let flag = 0;
let lastDay;


dropdownD.addEventListener("click", function(event) {
    let drop = document.querySelector(".days-options");
    drop.classList.toggle('active');
})

dropdownH.addEventListener("click", function(event) { 
    let drop = document.querySelector(".hours-options");  
    drop.classList.toggle('active');
})

function getDay(info) {
    document.querySelector(".chosen-day").innerText = info.innerText;
    document.querySelector(".days-options").classList.toggle('active');
}

function getHour(info) {
    document.querySelector(".input__hour").value = info.innerText;
    document.querySelector(".hours-options").classList.toggle('active');
}

function removeClass(className) {
    flag++;
    if(flag == 2){
        document.querySelector(lastDay).classList.toggle('bnt__days-active');
        flag--;
        lastDay = className;
    }else {
        lastDay = className;
    }
}

function addClass(event) {
     document.querySelector("." + event.classList[1]).classList.toggle('bnt__days-active');
     let nameClass = ("." + event.classList[1]);
     removeClass(nameClass);
}
