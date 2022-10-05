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
        console.log(flag);
        lastDay = className;
        lastTab = tab_class;
    }else {
        lastDay = className;
        lastTab = tab_class;
    
    }
}

function checkActive(event) {
    let tab_days = document.querySelectorAll(".bnt__days");
    let isActive;

    console.log("tou aqui");
    for(let i=0; i <= tab_days.length; i++ ) {
        isActive = tab_days[i].classList.contains(".bnt__days-active");
            if(isActive) {
                console.log("Passei if");
                /*let dayClass = getActive.classList[1];
                let tabclass = ".board-" + event.id;
                document.querySelector("."+dayClass).classList.toggle('.bnt__days-active');*/
            }
    }       
}

function addClass(event) {
//checkActive(event);
        document.querySelector("." + event.classList[1]).classList.toggle('bnt__days-active');
        let nameClass = ("." + event.classList[1]);
        //console.log(nameClass);
        let tab = document.querySelector(nameClass);
        //console.log(tab);
        let tab_class = ".board-" + tab.id;
        //console.log(tab_class);
        document.querySelector(tab_class).style.display = "flex";
        removeClass(nameClass, tab_class);   

        
}
