// Первая задача

/*
function sumTo (n) { 
    var sum = 0;
        for(var i = 0; i<=n; i++){
            sum = sum + i; 
        }
    console.log(sum);
}
*/

//Вторая задача 

/*
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }(), 1000);
}
*/

// Третья задача

/*
var phrase;
function reverse (phrase) {
    var firstArray = [...phrase].reverse().join('');
}
*/
// Четвертая задача

// Прочитал за каррирование, что стало для меня открытием, не понял как реализовать, 
// но нашел информацию о методе _.curry с библиотеки lodash, которая делает это автоматически

// Пятая задача 

/*
function isPalindrome (phrase) {
    var firstphrase = phrase;
    var secondphrase = [...phrase].reverse().join('');
    if (firstphrase == secondphrase)
        console.log("true");
    else
    console.log("false");
}
*/

// Шестая и седьмая задачи

// К сожеления не смог сделать:
// шестую, думал сравнить через длину масива после преобразования с строки, но если количество букв одинаково, не будет верно.
// седьмую, не разобрался как добавлять в масивы числа которые нужны для последовательности фибоначи, хотя вроде как принцып понимаю но где-то стопорюсь.

