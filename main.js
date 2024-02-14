'use strict';

const namePerson = prompt('Ваше имя', "Артем")

const result = namePerson === "Артем" ? 'Директор' :
    namePerson === "Александр" ? 'Преподаватель' : "Студент"

const lang = prompt('RU or EN')

switch(true){
    case lang.toUpperCase() === 'RU':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;

    case lang.toUpperCase() === 'EN':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;

    default:
        console.log('ты помоему перепутал');
}

console.log(result);
