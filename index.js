///// методы для регулярных выражений
//// test()- ищет совпадение и возвращает true/false
////match() -ищет совпадение и возвращет его в виде массива 
///replace()- ищет совпаддения  заменяет на новое значение 
////search() - поиск совпадения и возвращает индекс совпадения


// i - С этим флагом поиск не зависит от регистра: нет разницы между A и a 
// g - С этим флагом поиск ищет все совпадения, без него – только первое.
// m - Многострочный режим
// s - Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n (рассматривается в главе Символьные классы).
// u - Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \p{...}).
// y - Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y")

console.log("maga hello Maga".match(/Maga/ig));


//**
// Основыне символы
// \d - цифра [0 - 9]
// \w - буква , цифра , _ [A-Za-z0-9_]
// \s - пробельный символ
// \D, \W, \S - отрицание ( не цифра , не буква , не пробел) 
// . - любой символ кроме перевода строки  
//  */
//**
// квантификаторы
// + - один и больше
// * - ноль и больше
// ? - нолт или один
// {3} - ровно 3
// {2,5} - от 2 до 5
// {2, } - 2 и больше 
//  */
//**
// Якоря
// ^ - начало строки 
// $ - конец строки  */
///**
// группа и альтернация 
// 
// (...) - группа
// | - или
// [abc] - любой из симыволов a,b,c
// {^abc] - любой кроме a,b,c
// [a-z] - диапозон
// */
console.log(/\d+/.test("123")); ///true
console.log(/\w+/.test("Маге 28 лет"));////true
console.log(/\s+/.test("Маге 28 лет"));//true
console.log(/\d+/.test("Маге 28 лет"));///true

const email = /^[\w.-]+@[\w.-]+\.\w{2,}$/
console.log(email.test("magomed@mail.ru"));

const number = /^[\+?.-]+\w{1,11}$/
console.log(number.test("+79214187510"));


console.log(/[а-яА-Я]/.test("Привет"));

///ЭКранирвание спецсимволов(. , + , * ,?,(,), и т.д)

const specChar = /\./
console.log(specChar.test("Maga.changa"));///Ищет точку 
const specChar1 = /\+/
console.log(specChar1.test("Maga+changa"));///Ищет плюс
const str19 = /100\$/
console.log(str19.test("У меня 100$"));
const str20 = "abc" 
console.log(str20.search(/b/));
const str21 = "Hello world Maga"
console.log(str21.replace(/Maga/, "JS"));





console.log("i love javascript".match(/javascript/ig));
const str31 = " i love javascript"
console.log(str31.replace(/javascript/, "payton"));
const sh = /\d+/g
console.log(sh.test("123456789"));
console.log("123456789".match(sh));
const sh3= /\./
console.log(sh3.test("привет.как дела?"));


// " у меня 2 яблока, 10 груш и 150 рублей"

// const sh4 = 
// console.log(" у меня 2 яблока, 10 груш и 150 рублей". match);


// const sh5 = /\#+\w/
// console.log(" крутой день! #javascript #coding #100days".test(sh5));


// const sh7 = /^[A-Za-z0-9]{6,12}$/
// console.log(sh7.test("pass1234"));


// const sh5= /^[\w]{6,12}$/
// console.log(sh5.test("pass1234"));



// console.log("это    очень     длинная     строка".replace(/\s+\g, ' '/));

// let sh8 = /^8(d+{3}){3}+\s+\{2}+\s+\{2}$/
 

// console.log(sh8.replace("89991234567"))


const phone = "89991234567"

console.log(phone.replace(/8(\d{3})(\d{3})(\d{2})(\d{2})$/ , `+7 ($1) $2-$3-$4`));

