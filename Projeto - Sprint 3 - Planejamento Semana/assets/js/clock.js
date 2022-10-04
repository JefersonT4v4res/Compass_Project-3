function clock() {
    const refresh = 1000;
    let myTime = setTimeout('currentHour()', refresh);
}

function addZero(time) {
    let value;
    if(time < 10){
        value = '0' + time;
        return value;
    }else {
        return time;
    }
}

function currentHour() {
    const date = new Date();
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    const hhmmm = [hours, minutes].join(':');
    document.querySelector(".header__hour").innerHTML = hhmmm;
    clock();
}

function currentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    let fullMonth;
    for(let i = 0; i <= 12; i++) {
        if(month == 0) {
           fullMonth = "Janeiro"; 
            }else if (month == 1) {
            fullMonth = "Fevereiro"; 
                }else if (month == 2) {
                    fullMonth = "Março"; 
                    }else if (month == 3) {
                        fullMonth = "Abril"; 
                        }else if (month == 4) {
                            fullMonth = "Maio"; 
                            }else if (month == 5) {
                                fullMonth = "Junho"; 
                                }else if (month == 6) {
                                    fullMonth = "Julho"; 
                                    }else if (month == 7) {
                                        fullMonth = "Agosto"; 
                                        }else if (month == 8) {
                                            fullMonth = "Setembro"; 
                                            }else if (month == 9) {
                                                fullMonth = "Outubro"; 
                                                }else if (month == 10) {
                                                    fullMonth = "Novembro"; 
                                                    }else if (month == 11) {
                                                        fullMonth = "Dezembro"; 
                                                    }
    }
    
    const dmy = day + " de " + fullMonth + " de " + year;
    
    document.querySelector(".header__date").innerHTML = dmy;
}