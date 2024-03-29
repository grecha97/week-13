//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date ();
console.log(currentDate);
//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = currentDate.getFullYear();
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = currentDate.getMonth();
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = currentDate.getDay();
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(currentYear,1,1);
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 41);
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let daysPassed = futureDate - currentDate;
console.log(daysPassed);
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate = new Date;
pastDate.setDate(pastDate.getDate()-5);
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate()+7);
console.log(nextWeek);
//Задание 11
// Выведите в консоль день недели для nextWeek
let dayNumber = new Date(nextWeek).getDay();
console.log(dayNumber);
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let futureYear = new Date ();
futureYear.setFullYear(futureYear.getFullYear()+5);
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(futureYear, 1, 1); 
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date15 = new Date(Date.parse(strDate));
console.log(date15);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
let ms = Date.parse (strDate);
console.log(ms);
//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';
const wrongDate = new Date(Date.parse (date));
if (wrongDate===NaN){
    console.log('Неправильный формат даты');
}
else{
    console.log('Правильный формат даты')
};

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if(number>=0){
    console.log('Положительное число');
} else{
    console.log('Отрицательное число');
}
//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 ===0){
    console.log('Четное число');
} else{
    console.log('Нечетное число');
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 ===0){
    console.log('Кратное 3');
} else{
    console.log('Некратное 3');
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number > 0 && number < 10){
    console.log('Однозначное');
} else{
    console.log('Неоднозначное');
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number > 0 && number < 100){
    console.log('Двузначное');
} else{
    console.log('Недвузначное');
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0) {
    console.log('Положительное число');
} else if (number === 0) {
    console.log('Равно нулю');
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 ===0){
    console.log('Кратное 5');
} else if (number % 7 ===0){
    console.log('Кратное 7');
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0) {
    console.log('Отрицательное число');
} else if (number === 0) {
    console.log('Равно нулю');
}
else{
    console.log('Число не является ни отрицательным, ни нулем');
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number > 0 && number < 1000){
    console.log('Трехзначное');
} else{
    console.log('Недвузначное');
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let day = '';

switch(new Date().getDay()) {
  case 0:
    day = 'Воскресенье';
    break;
  case 1:
    day = 'Понедельник';
    break;
  case 2:
    day = 'Вторник';
    break;
  case 3:
    day = 'Среда';
    break;
  case 4:
    day = 'Четверг';
    break;
  case 5:
    day = 'Пятница';
    break;
  case 6:
    day = 'Суббота';
    break;
  default:
    day = 'Неизвестный день недели';
}

console.log(day);  
//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = '';
let fullName;

switch (direction) {
    case 'N':
        fullName = "Север";
        break;
    case 'S':
        fullName = "Юг" ;
        break;
    case 'W':
        fullName = "Запад";
        break;
    case 'E':
        fullName = "Восток";
        break;
    default:
        fullName = 'Неизвестное направление';   
}
console.log(fullName);
