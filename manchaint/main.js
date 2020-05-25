$(function () {
    $("#progressbar").progressbar({
        value: 0
    });

    $(".form-control").change(function () {
        var pbVal = 0;
        if ($("#email").val().length > 0) pbVal += 20;
        if ($("#pwd").val().length > 0) pbVal += 20;
        if ($("#pwd1").val().length > 0) pbVal += 20;

        $("#progressbar").progressbar("option", "value", pbVal);
        return false;

    })
});