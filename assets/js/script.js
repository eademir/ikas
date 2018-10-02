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
        sepet.find(".empty").append('<ul class="item" data-id="' + move.attr("data-id") + '">' + '<div class="counter"><div class="count"><p>'+ count +'</p></div></div>' + '<li class="title"><h4>' + move.find("h4").html() + '</h4><ul class="size"><p>'+ move.find(".size") +'</p></ul></li><li class=price" style="float: right;width: 130px;text-align: right;"><h4>'  + move.find("span").html() + 'TL<h4></li></ul>');
        console.log(move.find("p"))
    }
    //toplam fiyat hesaplama
    function toplam(sbasket) {
        var top =0;
        var price;

        $(".sbasket").each(function() {
            sbasket = $(this);
            price = parseFloat(sbasket.find("span").text().replace(sbasket.find("span").text(), ""));
            top += (price);
        });
        console.log(price)
        $("#price").fadeIn().text(top + "$");
        if ($(".sbasket div").length != 0) {
            $(".sbasket .empty p.e123").fadeOut();
            $(".sbasket .footer").addClass("show")
        }
        else {
            $(".sbasket p").fadeIn().text("0 Ürün Bulunmaktadır");
        }
    }

    //ödeme buttonuna oppup eklenecek
    $(".pay").click(function(){
        if (confirm("Sipariş onayı")) {
        window.location.assign("index.html");
    }
    });
    //ödeme onayı geldikten sonra sayfa yenile ya da yönlendir
});