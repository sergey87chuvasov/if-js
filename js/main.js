"use strict"


// 1 часть - Работа с переменными:

let user = "John Doe";
console.log(user);

let student = "Sergey";
console.log('Выведет имя:', student);

user = student;
// выведет имя Sergey, тк перезаписали занчение переменной student в user
console.log(user);

console.log(student);
// значение в переменной тоже не менялось


// 2 часть - Работа с примитивами:

let test = 1;
++test;
// «префиксная форма»-как и test++«постфиксная форма» увел знач. на +1,с небольшой разницей
console.log(test);

test+=1; // test = test + 1 увеличиваем значение и получаем =3
console.log(test);

test-=1;
console.log(test); // test = test - 1  уменьшаем значение и получаем =2

//приведите test к типу bool;

test = Boolean(test);
console.log(typeof test);

// Задача 1
/* Дан массив [2, 3, 5, 8]. 
С помощью цикла for найдите произведение элементов этого массива. 
Результат выведите в консоль. */

const arr  = [2, 3, 5, 8];  // индекс массива 0,1,2,3; длинна массива = 4;
let multipl = 1; // ставим начальное знач 1 тк умножать на 0 нет смысла; 1*2*3*5*8
for (let i = 0; i < arr.length; i++) {
    multipl = multipl*arr[i]
    console.log(multipl); // 2,6,30,240
}
console.log(multipl); //240

 //1-1

const arr1  = [2, 3, 5, 8];  // индекс массива 0,1,2,3; длинна массива = 4;
let multipl1 = 2; // ставим начальное знач 2 это первый индекс массива 2*3*5*8
for (let i = 1; i < arr.length; i++) {  // i = 1 тк мы уже начинаем с 2(i=0)
    multipl1 = multipl1*arr1[i]
    console.log(multipl1); // 6,30,240
}
console.log(multipl1); //240

// Задача 2
/*
Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. 
С помощью цикла for и оператора if выведите в консоль те элементы массива, 
которые больше 5-ти, но меньше 10-ти. */

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {  // применили логический оператор И &&
        console.log('Вывести число:', arr2[i]) // 8,6
    }
}

/*  Задача 3 - Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. 
С помощью цикла for и оператора if выведите в консоль четные элементы массива. 
0 - это четное число - но тут убрал его для вывода */
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
    if (!(arr3[i] % 2)) {
        console.log('Вывести четное число:', arr3[i])
    }
}

/* Задача 4 - Функция palindrome (Слово палиндром может читаться справа-налево 
и слева-направо одинаково. Прим "шалаш".):
создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, 
является ли переданное функции слово палиндромом или нет. */

function isPalindrome (words) {
  // преобраз букв в нижний регистр (на всякий случай) можно и toApperCase
     words = words.toLowerCase()
  // сраниваем наше слово с перевернутым словом
  // метод split - преобр слово в массив из букв ('ш','а','л','а','ш') (добавл пустую строку)
  // метод reverse - переворачивает массив
  // метод join - преобразует массив в слово (убирает пустую строку - шалаш)
   return words === words.split('').reverse().join('')
}
console.log(isPalindrome('шаЛаш')); //true
console.log(isPalindrome('шаГраш')); //false

// 2 вариант 

const isPalindrome2  = str => {
    str = str.toLowerCase();
    let str2 = str.split('');
    str2 = str2.reverse();
    str2 = str2.join('');
    if (str==str2) return true;
    else return false;

    return str2;
}
console.log(isPalindrome2('шалаш')); // true
console.log(isPalindrome2('шалгаш')); // false

/* Задача 5
Функция min(a, b) и функция max(a,b):
напишите функцию min(a,b), которая возвращает меньшее из чисел;
напишите функцию max(a,y), которая возвращает большее из чисел;
попробуйте переписать функцию, используя тернарный оператор.
*/

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(min(3,22));
  console.log(min(-3,0));


  function min(a, b) {
    return a < b ? a : b;
  }


  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(max(4,12));
  console.log(max(-3,3));

  function max(a, b) {
    return a > b ? a : b;
  }

  /* Задача 6
Замена элементов массива:
создайте массив с десятью случайными элементами от 0 до 100;
напишите функцию, которая будет заменять все 0 на строку 'zero';
выведите полученный массив в консоль 
(пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).
*/

let arr5 = [1, 5, 10, 33, 100, 50, 2, 7, 80, 0];

function changeZero () {
  
  let arr5toString = arr5.toString(); // преобразовали массив в строку (это не массив)
  // console.log(arr5toString);
  // console.log(typeof arr5toString);
  let arr5toPseudo = arr5toString.split(','); // преобр строку обратно в массив
  // console.log('arr5toPseudo ' + arr5toPseudo); // вывели массив
  let resultArr = []; // иниц пустой массив
  for (let i = 0; i < arr5toPseudo.length; i++) {
    if(!arr5toPseudo[i].includes('0')){ // проверяет, содержит ли строка заданную подстроку
      resultArr.push(+arr5toPseudo[i]); // если нет склад в resultArr элемент как число
    } else {
      var regex = /0/gi; // регуляр выражение для поиска '0'
        let element = arr5toPseudo[i].replace(regex, 'zero'); // заменяем 0 на зиро и склад в массив резулАрр
        resultArr.push(element);
      }
  }
  console.log(resultArr);
 }
changeZero ();

// Задача 7 - Напишите функцию sum, которая возвращает сумму чисел следующим образом:
// console.log(sum(5)(2)); // 7

function sum(a) {
  return function (b) {
      let currentSum = a + b;
      console.log(currentSum);
      return currentSum;
  }
}
sum(5)(2);


/*  Задача 8 - Покрасьте абзацы по клику (событие click), происх при клике на элемент лев кнопк мыши
по первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй 
и так далее; цвета из массива меняются бесконечно; все абзацы работают независимо. */

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue']; // дан массив из 5 цветов [0,1,2,3,4]-индекс, lenght=5
    let counter = 0; // Завели перемен счетчик, чтобы считать клики (0 - тк число нужно нам а не строка)
    const paragrap = document.querySelectorAll('p'); // получается NodeList 0,1,2 - инд., length=3, выбрали все параграфы <p></p> или ...All('[id^="text"]')
    for (let i = 0; i < paragrap.length; i++) {  // пробежимся циклом по параграфам
      paragrap[i].addEventListener('click', function (e) { // передаем функ котор вызовется по клику
            let target = e.target; // click по конкретному параграфу
            for (let i = 0; i < paragrap.length; i++) { // пробегаемся в цикле чтобы сбросить с параграфов все цвета
              paragrap[i].style.backgroundColor = '';
            }
            target.style.backgroundColor = colors[counter]; // colors[0], colors[1] добавляем цвет на параграф
            counter = counter + 1; // увелечение счетчика клика;
            if ( counter === colors.length) { // когда счетчик дошел до длины массива
                counter = 0; // сбросили счетчик кликов на заново
            }
        });
    }

/* Задача - 9 Преобразование формата даты:
в переменной date лежит дата в формате '2020-11-26';
преобразуйте эту дату в формат '26.11.2020';
функция должна быть универсальной, 
т.е. принимать любую дату и приводить ее к поставленному в задании формату.*/

let date = '2020-11-26';

function changeDate (date) {
  var arr = date.split('-');
  // console.log(arr);
  var newStr = arr[2] + '.' + arr[1] + '.'+arr[0];
  // console.log(newStr); //получим строку '26.12.2020'
  return newStr;
}
// changeDate();
console.log('1 вариант:', changeDate('2020-11-26'));

// 2 вариант

let date1 = '2020-11-26';
function changeDate1 (date) {
  let newStr = date.split('-').reverse().join('.');
  // console.log(newStr);
  return newStr;
}

// changeDate1();
console.log('2 вариант:', changeDate1('2020-11-26'));

// 3 вариант 

function getNewFormatDate(date) {
  let year = getZero(new Date(date).getFullYear());
  let month = getZero(new Date(date).getMonth() + 1);
  let day = getZero(new Date(date).getDate());
  return `${day}.${month}.${year}`;
}

function getZero(n)
{
  if ( n < 10) {
      return `0${n}`;
  } else {
      return n;
  }
}

// getNewFormatDate('2020-11-26');
console.log('3 вариант:', getNewFormatDate('2020-11-26'));


/* Задача - 10  Поиск объектов размещения:
дан массив;
напишите функцию поиска, которая будет принимать строку;
по полученной строке найдите все совпадения в массива;
верните список строк в формате: страна, город, отель.*/

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function searchStr(str, arr) {
  for (let i = 0; i < arr.length; i++) {
      // console.log(Object.values(arr[i]));
      if(Object.values(arr[i]).includes(str)) {
          return Object.values(arr[i]);
      }
  }
  return 'пусто';
}

console.log(searchStr('France', data ));
console.log(searchStr('Germany', data ));

/* Задача 11 - Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".):
создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли переданное функции слово палиндромом или нет;
теперь уже зная как работать со строками и массивами запишите реализацию этого метода в одну строку. */

function isPalindrome1(words) {
  words = words.toLowerCase()
  return words === words.split('').reverse().join('')
}
console.log(isPalindrome1('шаЛаш')); //true

/* Задача 12 */

const hotels1 = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

function searchStr1(str, arr) {
  for (let item of hotels1) {
    if (Object.values(item).includes(str)) {
      return Object.values(item);
    }
  }
  return 'пусто';
}

console.log(searchStr1('Germany', data)); // ["Hostel Friendship", "Berlin", "Germany"]


function searchStr2(str) {
  let countriesArr = []; // создаем пустой массив
  hotels1.forEach(item => { // пробег по масиву hotels
    // item = {
    //     name: 'Steigenberger Hotel',
    //     city: 'Hamburg',
    //     country: 'Germany',
    // }
    //Object.values(item) = ['Steigenberger Hotel', 'Hamburg', 'Germany']
    if (Object.values(item).includes(str)) {  // проверка на вхождение заданной строки с элементами массива Object.values(item)
      countriesArr.push(Object.values(item)); // True - в масстив countriesArr добавляем элемент ( весь массив Object.values(item))
    }
  });

  return countriesArr; // возвращаем массив со всеми найденными вхождениями [Arr1, Arr2, ...]
}
console.log(searchStr2('Mexico', data)); // ["Hostel Friendship", "Berlin", "Germany"]


/* Задача 13

Сопоставте страны с городами из массива:
дан массив;
напишите функцию, которая выберет все уникальные страны и сопоставит с ними города;
в консоли должен быть выведен примерно такой результат:
{
   Australia: ['Sydney'],
   Germany: ['Berlin', 'Hamburg'],
   Italy: ['Florence', 'Rome'],
   USA: ['Chicago', 'Hawaii', 'Miami'],
   Ukraine: ['Kyiv']
}

*/

const hotels3 = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  }
]

  function cityOfCountries(array) {
    let countryArray = [];
    for (let item of array) {
      if (!countryArray.includes(item['country'])) {
        countryArray.push(item['country']);
      }
    }
    for (let country of countryArray) {
      let cities = array.filter((item) => {
        return item.country === country;
      });
      console.log('cites', cities);
      let citiesResult = [];
      for (let item of cities) {
        citiesResult.push(item.city);
      }
      console.log(country, citiesResult);
    }
  }

// ЗАДАЧА 
// Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности.Напимер:

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || typeof (a) !== "object" || b === null || typeof (b) !== "object") return false;

  let propertiesInA = 0, propertiesInB = 0;
  for (let property in a) {
    propertiesInA = propertiesInA + 1;
  }
  for (let property in b) {
    propertiesInB = propertiesInB + 1;
    if (!(property in a) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }
  return propertiesInA === propertiesInB;
}

deepEqual(obj1, obj2); 
console.log(deepEqual(obj1, obj2)); // true
deepEqual(obj1, obj3); 
console.log(deepEqual(obj1, obj3)); // false