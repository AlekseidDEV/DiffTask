'use strict';

const namePerson = prompt('Ваше имя', "Артем")

const result = namePerson === "Артем" ? 'Директор' :
    namePerson === "Александр" ? 'Преподаватель' : "Студент"



const lang = prompt('RU or EN')

const ruArrDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const enArrDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const arrDays = [ruArrDay, enArrDay]

switch(lang.toUpperCase()){
    case 'RU':
        console.log(arrDays[0]);
        break;

    case 'EN':
        console.log(arrDays[1]);
        break;

    default:
        console.log('ты помоему перепутал');
}

console.log(result);
