$(function() {
    $(".list .item").draggable({
        revert: true,
        drag: function() {
            $(this).addClass("active");
            $(this).closest(".list").addClass("active");
        },
        stop: function() {
            $(this).removeClass("active").closest(".left").removeClass("active");
        }
    });
    $(".sbasket").droppable({
        tolerance: "touch",
        drop: function(event, ui) {
            var sepet = $(this);
            var move = ui.draggable;
            var itemId = sepet.find(".sbasket .item[data-id='" + move.attr("data-id") + "']");
            var adet;
            move.fadeOut().fadeIn();
            //counter bu kısımdan sayılacak
            if (itemId.html() != null) {
                itemId.find("").val(parseInt(itemId.find("").val()) + 1);
            }
            else {
                addBasket(sepet, move);
                move.find("input").text(adet + 1 + " *");
            }
            toplam();
        }
    });
    count = 1;
    count = count +1;
    function addBasket(sepet, move) {
        sepet.find(".empty").append('<ul class="item" data-id="' + move.attr("data-id") + '">' + '<div class="counter"><div class="count"><p>'+ count +'</p></div></div>' + '<li class="title"><h4>' + move.find("h4").html() + '</h4><ul class="size"><p>'+ move.find("p") +'</p></ul></li><li class=price" style="float: right;width: 130px;text-align: right;"><h4>'  + move.find("span").html() + 'TL<h4></li></ul>');

    }
    //toplam fiyat hesaplama
    function toplam(sepet) {
        var top =0;
        var fiyat;
        var adet;

        $(".sbasket").each(function() {
            sepet = $(this);
            fiyat = parseFloat(sepet.find("span").text().replace(sepet.find("span").text(), ""));
            top += (fiyat * adet);
        });
        $("#price").fadeIn().text(top + "$");
        if ($(".sbasket div").length != 0) {
            $(".sbasket .empty p").fadeOut();
            $(".sbasket .footer").addClass("show")
        }
        else {
            $(".sbasket p").fadeIn().text("0 Ürün Bulunmaktadır");
        }


    }
});