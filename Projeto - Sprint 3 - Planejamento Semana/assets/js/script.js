let dropD = document.querySelector(".day-week");
let dropH = document.querySelector(".hour");
let flag = 0;
let lastDay;
let lastTab;

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


function removeClass(className, tab_class) {
    flag++;
    if(flag == 2){
        document.querySelector(lastDay).classList.toggle('bnt__days-active');
        document.querySelector(lastTab).style.display = "none";
        flag--;
        lastDay = className;
        lastTab = tab_class;
    }else {
        lastDay = className;
        lastTab = tab_class;
    }
}

function addClass(event) {
    document.querySelector("." + event.classList[1]).classList.toggle('bnt__days-active');
    let nameClass = ("." + event.classList[1]);
    let tab = document.querySelector(nameClass);
    let tab_class = ".board-" + tab.id;
    document.querySelector(tab_class).style.display = "flex";
    removeClass(nameClass, tab_class);

}
