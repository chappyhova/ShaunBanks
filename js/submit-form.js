$(document).ready(function () {
    $("#contact").submit(function(event) {
        console.log($(this).serializeArray());
        event.preventDefault();
        console.log("hiya");
    });
});
