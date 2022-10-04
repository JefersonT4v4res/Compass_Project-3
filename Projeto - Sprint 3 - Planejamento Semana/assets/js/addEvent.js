let btn_add = document.querySelector(".add");

var activity = [
    {
        tab_day: "monday",
        day_week: "segunda-feira",
        hour_activity: "13h00m",
        event_description: "Mussum ipsum",
        conflict: "false"
    }
]

console.log(activity[0].day_week);

function createCard() {
    
    for(let i = 0; i <= activity.length; i++) {
        let tab = document.querySelector(".bnt__days");
        let tab_class = "board-" + tab.id;
        document.querySelector("."+tab_class).insertAdjacentHTML("afterbegin", "<div class='toDoList__board-card'>" + "<div class='card__hour'>" + activity[0].hour_activity +"</div>" +
        "<div class='card__content'>" + "<p class='card__content-activity'>" + "<button class='card__content-btn_erase'>Apagar</button>");
       
    }
}

function saveInformations() {
    let conflict_hour = document.querySelector(".input__hour").value;
    let conflict_day = document.querySelector(".chosen-day").innerHTML;

    console.log(conflict_hour + " " + " " + conflict_day );

   
    activity[i].day_week = document.querySelector(".chosen-day").innerHTML;
    activity[i].hour_activity = document.querySelector(".input__hour").value;
    activity[i].event_description = document.querySelector(".event-description").value;
    activity[i].conflict = activity[i];

    createCard();
}

function inptEmpty(){
   
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