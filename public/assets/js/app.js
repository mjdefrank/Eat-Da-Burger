$(function () {
    $('#submit').on('click', function (event) {
        //don't allow empty submit
        event.preventDefault();
        //create a newBurger var from HTML content
        var newBurger = $('#newBurger').val();
        //AJAX POST call the var
        $.ajax("/api/burger", {
            type: "POST",
            data: { name: newBurger }
        //reload the page
        }).then(location.reload());
        //empty the HTML field
        $('#newBurger').val('');
    });
    //not sure why I'm selecting the body with jQuery
    $('body').on('click', '#devour', function () {
        //create id var...**unsure what I'm doing here
        var id = $(this).data('id');
        //AJAS PUT call, setting devoured to true in the db
        $.ajax('/api/burger/' + id, {
            type: 'PUT',
            data: { devoured: true }
        //reload the page
        }).then(location.reload());
    });
});