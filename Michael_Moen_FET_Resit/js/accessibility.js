$('#accessToggle').on('change', function () {
    var section = $(this).closest('.row.text-center');

    // Couldn't find another way to get the text "Accessibility" to change color
    var title = section.find('.section-sub-title');

    if ($(this).is(':checked')) {
        section.css('background-color', 'black');
        section.css('color', 'white');
        title.css('color', 'white');
    } else {
        section.css('background-color', '');
        section.css('color', '');
        title.css('color', '');
    }
});