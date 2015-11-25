$(function () {
    $("#slider").slider({
        range: "min",
        value: 0,
        min: 0,
        max: 100,
        slide: function (event, ui) {
        $("#amount").html(ui.value+"%");
    }
});
});
