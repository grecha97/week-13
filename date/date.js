const calendar = document.querySelector('#birthdayDate');
const button = document.querySelector('.btn');
const text = document.querySelector('.textCount');
const currentDay = new Date();
const wordForms = ['день', 'дней', 'дня'];

function countDays() {
if(calendar.value !=''){
    const birthday = new Date (Date.parse(calendar.value));
    const number = Math.floor((birthday-currentDay)/(24*3600*1000));
    const result = Number(String(number).slice(-1));
    text.style.color = 'black';
    if(result >= 10 && number <= 20){
        text.textContent = `До вашего дня рождения осталось ${number} дней`;
    } else if(result === 1){
        text.textContent = `До вашего дня рождения осталось ${number} день`;
    } else if (result >=2 && result <= 4){
        text.textContent = `До вашего дня рождения осталось ${number} дня`;
    }
    else{
        text.textContent = `До вашего дня рождения осталось ${number} дней`;
    }
}
    else{
        text.textContent = `Введите дату рождения`;
        text.style.color = 'red';
    }
}

button.addEventListener('click', countDays);
