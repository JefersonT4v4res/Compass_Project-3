let dropD = document.querySelector(".day-week");
let dropH = document.querySelector(".hour");
let flag = 0;
let lastDay;

dropD.addEventListener("click", dropdownD);

    function dropdownD() {
        document.querySelector(".days-options").classList.toggle('active');
    }
        function getDay(info) {
            document.querySelector(".chosen-day").innerText = info.innerText;
        }

dropH.addEventListener("click", dropdownH)

    function dropdownH() {
        document.querySelector(".hours-options").classList.toggle('active');
    }
        function getHour(info) {
            document.querySelector(".input__hour").value = info.innerText;
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
