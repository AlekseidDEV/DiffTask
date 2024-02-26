'use strict';

const daySpan = document.querySelector('.day')
const monthSpan = document.querySelector('.month')
const yearSpan = document.querySelector('.year')
const numhourSpan = document.querySelector('.num_hour')
const numminuteSpan = document.querySelector('.num_minute')
const numdaySpan = document.querySelector('.num_day')
const numsecondSpan = document.querySelector('.num_second')
const hourLetter = document.querySelector('.str_hour')
const minuteLetter = document.querySelector('.str_minute')
const secondLetter = document.querySelector('.str_second')
const custTime = document.querySelector('.custom_time')
const customDate = document.querySelector('.custom_date')

const dayArray = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
]
const monthArr = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря'
]

const arrHours = [
    'час',
    'часа',
    'часов'
]
const arrMinutes = [
    'минута',
    'минуты',
    'минут'
]
const arrSeconds = [
    'секунда',
    'секунды',
    'секунд'
]

const getTime = () => {
    const date = new Date() 
    
    const day = date.getDay()
    const dayNumber = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const options = { year: 'numeric', month: '2-digit', day: '2-digit'}
    const datePart = new Intl.DateTimeFormat('ru-RU', options).format(date);
    const timePart = date.toLocaleTimeString('ru-RU', { hour12: false });
    
    return {day, dayNumber, month, year, hour, minute, second, datePart, timePart}
}

const declination = (number, arrDeclain) => {

    if(number % 100 >= 12 && number % 100 <= 14){
        return arrDeclain[2]
    }

   if(number % 10 === 1 && number !== 11){
        return arrDeclain[0]
   } else if(number % 10 >= 2 && number % 10 <= 4){
        return arrDeclain[1]
   } else{
        return arrDeclain[2]
   }
}

const render = () => {
    const {day, dayNumber, month, year, hour, minute, second, datePart, timePart} = getTime()

    daySpan.textContent = dayArray[day]
    numdaySpan.textContent = dayNumber
    monthSpan.textContent = monthArr[month]
    yearSpan.textContent = year
    numhourSpan.textContent = hour
    numminuteSpan.textContent = minute
    numsecondSpan.textContent = second

    custTime.textContent = timePart
    customDate.textContent = datePart

    secondLetter.textContent = declination(second, arrSeconds)
    minuteLetter.textContent = declination(minute, arrMinutes)
    hourLetter.textContent = declination(hour, arrHours)
}

setInterval(render, 1000)
