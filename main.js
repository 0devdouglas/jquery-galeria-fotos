$(document).ready(function() {

    $("header button").click(() => {
        $("form").slideDown();
    })

    $("#btn-cancel").click(() => {
        $('form').slideUp()
    })

    $("form").on("submit", (e) => {
        e.preventDefault();
        const imageAddress = $("#new-image-address").val();
        const newItem = $('<li style="display: none;"></li>');
        $(`<img src="${imageAddress}" />`).appendTo(newItem);
        $(`
        <div class="overlay-image-link">

            <a href="${imageAddress}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>

        </div>`).appendTo(newItem);
        $(newItem).appendTo('ul')
        $(newItem).fadeIn(5000);

        $("#new-image-address").val("");

    })

});