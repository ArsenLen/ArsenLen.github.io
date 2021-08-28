$(document).ready(function () {

    let count = 0;

    let x = $(document).width() - 200; //1366 -> 1166 + 200
    let y = $(document).height() - 200;// 625 - 200 -> 425 + 200

    $(".shape").on("click", function () {

        // случайное положение квадрата
        let randomPosX = Math.round(Math.random() * x); // [0:1], 0.99 * 1366
        let randomPosY = Math.round(Math.random() * y); // [0:1], 0.99 * 625
        $(this).css({
            "top" : randomPosY,
            "left" : randomPosX
        });

        // счетчик очков
        count++;
        $(".count").text(count);

    })

})

// $(elem).css("cssProp", "cssValue");
// $(elem).css("bg-color", "darksalmon");
// $(elem).css("position", "abs, rel, sticky....")

// $(this).css("top", "200px")
// $(this).css({"cssProp" : "cssValue", "cssProp": "cssValue"})
// Как переместить наш шэйп на 200пх сверху и слева

// Как перемещать наш шэйп на случайное положение
// Как получить рандомное число: randomPos = Math.round(Math.random() * 50)
//

// $(this).text("count++" + count++)

// count = count + 1; count++;
// count = count + 2;

