let btn_add = document.querySelector(".add");
let btn_saveLS = document.querySelector(".save")

var activity = [];
  
//const getBanco = () => JSON.parse(localStorage.getItem ('todoList')) ?? [];

function saveLocalStorage() {
  localStorage.setItem('toDoList', JSON.stringify(activity));
  alert("Seus itens estão salvos no localStorage!")
}

function drawCards() {
    activity.forEach(createCard());
}


function focusOnTab(tab, board) {
    //document.querySelector(tab).classList.toggle('bnt__days-active');
    // document.querySelector(board).style.display = "flex";
}

function getDayWeek(key, dayName) {
    let id, tab;
    let days = document.querySelectorAll(".option-day");
    
    for(let i=0; i <= days.length; i++) {
        if(days[i].textContent == dayName) {
            id = ".board-" + days[i].id;
            tab = ".btn-" + days[i].id;
            //focusOnTab(tab, id);
            if(key == 1){
                return id;
            }else {
                return tab;
            }
            
        }
    }
}

function deleteCard(id) {
    let name = activity[id].day_week; //segunda...
    let tab = getDayWeek(1, name);

    activity.splice(id, 1);

    if(activity != "") {
        
        for(let i = 0; i < activity.length; i++) { 
            console.log("Tamanho vetor: " + activity.length);
            
            if(activity[i].day_Tab == ".board-monday") {     
                document.querySelector(tab).innerHTML = "<div class='toDoList__board-card' id='card"+ i +"'>" + "<div class='card__hour'>" 
                + activity[i].hour_activity +"</div>" +
                "<div class='card__content'>" + "<p class='card__content-activity'>" + activity[i].event_description +
                 "</p><button onclick='deleteCard("+i+")' class='card__content-btn_erase' id='btn__erase"+ i +"'>Apagar</button>";
                   
                }else if(activity[i].day_Tab == ".board-tuesday") {
                    console.log("Tab day: " + activity[i].day_Tab);
                    document.querySelector(tab).innerHTML = "<div class='toDoList__board-card' id='card"+ i +"'>" + "<div class='card__hour'>" 
                    + activity[i].hour_activity +"</div>" +
                    "<div class='card__content'>" + "<p class='card__content-activity'>" + activity[i].event_description +
                    "</p><button onclick='deleteCard("+i+")' class='card__content-btn_erase' id='btn__erase"+ i +"'>Apagar</button>";
                  
                    
                    }else if(activity[i].day_Tab == ".board-wednesday") {
                        document.querySelector(tab).innerHTML = "<div class='toDoList__board-card' id='card"+ i +"'>" + "<div class='card__hour'>" 
                        + activity[i].hour_activity +"</div>" +
                        "<div class='card__content'>" + "<p class='card__content-activity'>" + activity[i].event_description +
                        "</p><button onclick='deleteCard("+i+")' class='card__content-btn_erase' id='btn__erase"+ i +"'>Apagar</button>";
                       
                        }else if(activity[i].day_Tab == ".board-thursday") {
                            document.querySelector(tab).innerHTML = "<div class='toDoList__board-card' id='card"+ i +"'>" + "<div class='card__hour'>" 
                            + activity[i].hour_activity +"</div>" +
                           "<div class='card__content'>" + "<p class='card__content-activity'>" + activity[i].event_description +
                            "</p><button onclick='deleteCard("+i+")' class='card__content-btn_erase' id='btn__erase"+ i +"'>Apagar</button>";
                              
                            }else if(activity[i].day_Tab == ".board-friday") {
                                document.querySelector(tab).innerHTML = "<div class='toDoList__board-card' id='card"+ i +"'>" + "<div class='card__hour'>" 
                                + activity[i].hour_activity +"</div>" +
                                "<div class='card__content'>" + "<p class='card__content-activity'>" + activity[i].event_description +
                                 "</p><button onclick='deleteCard("+i+")' class='card__content-btn_erase' id='btn__erase"+ i +"'>Apagar</button>";
                                 
                                }else if(activity[i].day_Tab == ".board-saturday") {
                                    document.querySelector(tab).innerHTML = "<div class='toDoList__board-card' id='card"+ i +"'>" + "<div class='card__hour'>" 
                                    + activity[i].hour_activity +"</div>" +
                                    "<div class='card__content'>" + "<p class='card__content-activity'>" + activity[i].event_description +
                                    "</p><button onclick='deleteCard("+i+")' class='card__content-btn_erase' id='btn__erase"+ i +"'>Apagar</button>";
                                    i++;  
                                    }else if(activity[i].day_Tab == ".board-sunday") {
                                        document.querySelector(tab).innerHTML = "<div class='toDoList__board-card' id='card"+ i +"'>" + "<div class='card__hour'>" 
                                        + activity[i].hour_activity +"</div>" +
                                        "<div class='card__content'>" + "<p class='card__content-activity'>" + activity[i].event_description +
                                         "</p><button onclick='deleteCard("+i+")' class='card__content-btn_erase' id='btn__erase"+ i +"'>Apagar</button>";
                                     
                                    }else {
                                        document.querySelector(tab).innerHTML = "";
                                    }
            }
        }
    
}

function createCard() {
    var i = activity.length - 1;
    let span_day = activity[i].day_week;
    let tab = getDayWeek(1, span_day);
    //let color = getDayWeek(2);
   // let rgba = document.querySelector(color).style.background;
  
        document.querySelector(tab).insertAdjacentHTML("afterbegin", "<div class='toDoList__board-card' id='card"+ i +"'>" + "<div class='card__hour'>" + activity[i].hour_activity +"</div>" +
        "<div class='card__content'>" + "<p class='card__content-activity'>" + activity[i].event_description + "</p><button onclick='deleteCard("+i+")' class='card__content-btn_erase' id='btn__erase"+ i +"'>Apagar</button>");
     
}

function saveInformations() {
    let day = document.querySelector(".chosen-day").innerHTML ;
    let dayTab = getDayWeek(1, day);

    activity.push({'day_Tab': dayTab,
    'day_week': day,
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
    } else {
        document.querySelector(".event-description").style.border = "0.0625rem solid #2CBE82";
        document.querySelector(".hour").style.border = "0.0625rem solid #2CBE82";
        saveInformations();
        
    }
}

btn_saveLS.addEventListener("click", saveLocalStorage);
btn_add.addEventListener("click", inptEmpty);
