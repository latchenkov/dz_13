/*
 * Задание 1
 * - Создайте переменную $name и присвойте ей значение содержащее ваше имя, например Игорь
 * - Создайте переменную $age и присвойте ей ваше количество лет, например 30
 * - Выведите на экран фразу по шаблону "Меня зовут Игорь"
 *                                      "Мне 30 лет"
 * Удалите переменные $name и $age
 * 
 * 
 * Задание 2
 * - Создайте константу и присвойте ей значение города в котором живете
 * - Прежде чем выводить константу на экран, проверьте, действительно ли она объявлена и существует
 * - Выведите значение объявленной константы
 * - Попытайтесь изменить значение созданной константы
 * 
 * Задание 3
 * - Создайте ассоциативный массив $book, ключами которого будут являться значения "title", "author", "pages"
 * - Заполните его по логике описания книг, укажите значения книги, которую недавно прочитали
 * - Выведите следующую строку на экран, следуя шаблону: "Недавно я прочитал книгу 'title', написанную автором author, я осилил все pages страниц, мне она очень понравилась"
 * 
 * Задание 4
 *  - Создайте индексный массив $books, который будет содержать в себе два массива $book1 и $book2, где будут записаны уже две последние прочитанные вами книги
 *  - Выведите следующую строку на экран, следуя шаблону: "Недавно я прочитал книги 'title1' и 'title2', 
 *  написанные соответственно авторами author1 и author2, я осилил в сумме pages1+pages2 страниц, не ожидал от себя подобного"

 */


	// Задание 1
 
var myname = 'Сергей';
var age = '44';
    console.log('Меня зовут ' + myname);
    console.log('Мне ' + age + ' лет');
    //document.write('Меня зовут ' + myname + '<br/>' + 'Мне ' + age + ' лет');

// Удаление переменных

// Правильно ли будет такой способ ?

    myname = undefined;
    age = undefined; // Т.е. переменная остается объявленной, но значения не имеет
    
    console.log(myname); // выведет 'undefined'
    console.log(age);  // выведет 'undefined'
   
if (!myname && !age){
	console.log('переменные удалены');
}
	
// для удаления свойств объекта есть оператор delete()

	// Задание 2
                 
var MY_CITY = 'Москва'; // Если я правильно понял, в Javascript нет констант в понимании PHP. Т.е. технически это переменная.
                        // Есть соглашение о наименовании и не изменении таких переменных. 
    
    if ( MY_CITY ) {
	console.log ( "Мой город: " + MY_CITY );
    }

// Попытка изменить константу
MY_CITY = 'Санкт-Петербург';
	console.log ( "Мой город: " + MY_CITY ); // Константа была изменена.

// Однако в спецификации есть описание констант, но эта технология заявлена как экспериментальная.

const MY_CITY_1 = 'Москва';  
    
    if ( MY_CITY_1 ) {
	console.log ( "Мой город: " + MY_CITY_1 );
    }

// Попытка изменить константу
MY_CITY_1 = 'Санкт-Петербург';
	console.log ( "Мой город: " + MY_CITY_1 ); // Константа не была изменена. Но этот метод поддерживается не всеми браузерами.


	// Задание 3
	
// Т.к. ассоциативных массивов в Javascript нет, воспользуемся объектом Object
var book = {'title' : '"Один хороший трейд"', 'author' : 'Майк Беллафиоре', 'pages' : 480 };
    console.log ( 'Недавно я прочитал книгу ' + book['title'] + ', написанную автором ' + book['author']);
    console.log ('Я осилил все ' + book['pages'] + ' страниц, мне она очень понравилась.');

	
	// Задание 4
	
var book1 = new Object();
    book1['title'] = '"СОКОЛ и ЛАСТОЧКА"';
    book1['author'] = 'Борис Акунин';
    book1['pages'] = 620;
	
var book2 = new Object();
    book2['title'] = '"Копи царя Соломона"';
    book2['author'] = 'Генри Хаггард';
    book2['pages'] = 350;
	
var books = new Array (book1, book2);

    console.log ( 'Недавно я прочитал книги ' + books[0]['title'] + ' и ' + books[1]['title'] + ' написанные соответственно авторами ' + books[0]['author'] + ' и ' + books[1]['author'] + '.');
    console.log ( 'Я осилил в сумме ' + (books[0]['pages'] + books[1]['pages']) + ' страниц. Не ожидал от себя подобного.');

// Для тренировки решил еще поработать с dz_3		
/*
 * Задание 1
 * - Создайте массив $date с пятью элементами
 * - C помощью генератора случайных чисел забейте массив $date юниксовыми метками
 * - Сделайте вывод сообщения на экран о том, какой день в сгенерированном массиве получился наименьшим, а какой месяц наибольшим
 * - Отсортируйте массив по возрастанию дат
 * - С помощью функция для работы с массивами извлеките последний элемент массива в новую переменную $selected
 * - C помощью функции date() выведите $selected на экран в формате "дд.мм.ГГ ЧЧ:ММ:СС"
 */

// Создаем массив date
var arrlen = 5; //set array length

var date = new Array();

function getRandomDate(){
    return Math.floor(Math.random() * Date.now());
    }

var i = 0;
while(i < arrlen){
    date[i] = getRandomDate();
	i++;
}

//console.log(date);

// Вычисляем наименьший день и наибольший месяц
var day = new Array();
var month = new Array();
for(var i = 0; i < arrlen; i++){
    var DateObject = new Date(date[i]);
        day[i] = DateObject.getDate();
        month[i]=DateObject.getMonth() + 1;
}
//console.log(day);
//console.log(month);

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

var minday = getMinOfArray(day);
var maxmon = getMaxOfArray(month);

console.log ( 'Наименьшее число: ' + minday);
console.log ( 'Наибольший месяц: ' + maxmon);


    
// Сортируем массив $date
date.sort();
//console.log(date);
var selected = new Date(date.pop());

console.log( 'Наибольшая дата в массиве: ' + selected.toLocaleString() + '.');
