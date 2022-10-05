let btn_add = document.querySelector(".add");

var activity = [ ];
    
function focusOnTab(tab, board) {
    //document.querySelector(tab).classList.toggle('bnt__days-active');
   // document.querySelector(board).style.display = "flex";
}

function getDayWeek() {
    let id, tab;
    let span_day = document.querySelector(".chosen-day").innerHTML;
    let days = document.querySelectorAll(".option-day");

    for(let i=0; i <= days.length; i++) {
        if(days[i].textContent == span_day) {
            id = ".board-" + days[i].id;
            tab = ".btn-" + days[i].id;
            focusOnTab(tab, id);
            return id;
        }
    }
}

function createCard() {
    var i = activity.length - 1;
    let tab = getDayWeek();
 
     document.querySelector(tab).insertAdjacentHTML("afterbegin", "<div class='toDoList__board-card' id='"+ i +"'>" + "<div class='card__hour'>" + activity[i].hour_activity +"</div>" +
     "<div class='card__content'>" + "<p class='card__content-activity'>" + activity[i].event_description + "</p><button class='card__content-btn_erase'>Apagar</button>");
}

function saveInformations() {
     
    activity.push({'day_week': document.querySelector(".chosen-day").innerHTML,
    'hour_activity': document.querySelector(".input__hour").value,
    'event_description': document.querySelector(".event-description").value});

    createCard();
}

function inptEmpty() {
   
    if(document.querySelector(".event-description").value == "") {
        document.querySelector(".event-description").style.border = "0.0625rem solid red";
        document.querySelector(".event-description").focus();
        alert("Preencha o campo de 'Atividade' ");
    }else if(document.querySelector(".input__hour").value == "") {
        document.querySelector(".hour").style.border = "0.0625rem solid red";
        document.querySelector(".input__hour").focus();
        alert("Preencha o campo de 'Horas'");
        /*if(document.querySelector(".input__hour").value.match("h", "m")) {
         saveInformations();
       }else {
        alert("Preencha o campo de 'Horas' com um valor válido");
       }*/
        
    } else {
        saveInformations();
        
    }

}

btn_add.addEventListener("click", inptEmpty);