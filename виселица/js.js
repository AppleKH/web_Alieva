var myWords = prompt("Введите слово (на русском с CAPS LOCK)",'');
var GameWord = myWords;

$(function(){
    $( "#start" ).on("click", function () {
        $("#start").remove();
        for (var i=0;i<GameWord.length;i++) {
            var div = document.createElement('div');
            div.className = "letter";
            document.body.appendChild(div);
        }

        var p = document.createElement('p');
        p.className = "variant";
        p.innerHTML = "Ваш вариант буквы. Разрешено 5 ошибок";
        document.body.appendChild(p);


        for (var i=1040; i<1072; i++) {
            var button = document.createElement('button');
            button.className = "answer";
            button.setAttribute("value", String.fromCharCode(i));
            button.innerHTML=String.fromCharCode(i);
            document.body.appendChild(button);
        }

        var Mistakes=0;
        var GoodAnswer=0;
        var pMistakes = document.createElement('p');
        pMistakes.setAttribute("id", "mistakes");
        pMistakes.innerHTML = "Количество ошибок: " + Mistakes;
        document.body.appendChild(pMistakes);

        $(".answer").on("click", function () {
            var letterGame = $(this).prop("value");
            $('[value ^="'+letterGame+'" ]').remove();
            var NumberWord = GameWord.indexOf(letterGame);
            var LastNumberWord = GameWord.lastIndexOf(letterGame);
            if (NumberWord == "-1") {
                Mistakes++;
                if (Mistakes >= 6) {
                    $("#mistakes").html("Вы проиграли. Теперь очередь другого игрока.");
                    setTimeout(function() { document.location.reload(true);
                    }, 5000);
                } else {
                    $("#mistakes").html("Количество ошибок: " + Mistakes);
                }
            } else {
                if (NumberWord == LastNumberWord) {
                    $(".letter").eq(NumberWord).html(letterGame);
                    GoodAnswer++;
                    if (GoodAnswer==GameWord.length) {
                        $("#mistakes").html("Вы выиграли. Теперь очередь другого игрока.");
                        setTimeout(function() { document.location.reload(true);
                        }, 5000);
                    }
                } else {
                    $(".letter").eq(NumberWord).html(letterGame);
                    $(".letter").eq(LastNumberWord).html(letterGame);
                    GoodAnswer+=2;
                    if (GoodAnswer==GameWord.length) {
                        $("#mistakes").html("Вы выиграли. Теперь очередь другого игрока.");
                        setTimeout(function() { document.location.reload(true);
                        }, 5000);
                    }
                }
            }
        });
    })
});