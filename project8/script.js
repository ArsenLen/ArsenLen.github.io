$(document).ready(function () {

    $(".item").on("click", function () {
        let elemId = $(this).attr("id");
        console.log(elemId);
        $("body").css("background-color", elemId);
        $("h1").text("цвет страницы " + elemId); // цвет страницы red 
    });

    $("#img").on("click", function () {
        $("body").css(
            {
            "background" : "url(bg-image.jpg)",
            "background-size" : "cover",
            "background-repeat" : "no-repeat"
        }
        );
    });

    $(".randomColor").on("click", function () {
        let randomNumber = Math.round(Math.random() * 255);
        let randomColor = "rgb(" + randomNumber + "," + randomNumber + "," + randomNumber + ")";
        $("body").css("background-color", randomColor);
        $("h1").text("цвет страницы случайный");
        console.log(randomColor);
    })

    // let randomColor = Math.random() * 255; /* данный метод выводит случайное число от 0 до 1. Как получить число 0 10 */
    // // randomColor = 100.34232432
    // let randomNumber = Math.round(randomColor);
    // console.log(randomNumber);
    // randomNumber = 5

    // randomColor = 8.670967
    // randomNumber = 9

    // rgb(randomNumber, randomNumber, randomNumber)

    // background-color: rgb(34, 205, 17);







})

// Найти метод jquery для добавления текста и в h1 добавлять название цвета,
// на который меняется body.

// 1. вешаем слушатель события - onClick.
// 2. Создаем переменную. Переменная - коробочка, которая содержит в себе что-то.
// 3. Данной переменной присваиваем значение аттрибута (id) той кнопки на которую мы нажали.
// 4. Вместо определенного названия цвета вставляем переменную.

// Задание: добавить текст в h1. внутри нашей функции.
//
// 1. Строка - string
// 2. Число - number

// Строка как тип данных указывается в двойных кавычках
// Число - цифра

// Переменная - это коробка, которая содержит определенные данные, определеный тип данных.

// цвет страницы *красный*
// красный меняется в зависимости от цвета