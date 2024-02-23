'use strict';

const dayContainer = document.querySelector('.days')

const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
const data = new Date()
const currentData = data.getDay()

const setClassday = () => {
    const allDay = dayContainer.querySelectorAll('p')

    allDay.forEach((day, index) => {
        if(day.textContent === week[currentData]){
            day.classList.add('current_day')
        } else if(index !== 5 && index !== 6){
            day.classList.add('ordinary_day')
        } else if(index > 4) {
            day.classList.add('day_off')
        }
    })
}

for (let item = 1; item <= week.length; item++) {
    const newParag = document.createElement('p')
    newParag.textContent = week[item % week.length]

    dayContainer.append(newParag)
}

setClassday()