(function(){

    $('#main-nav a').click(function() {
        $("li.active").removeClass("active");
        $(this).closest('li').addClass('active');
    });
    
    /*$('#course').tocible({
        heading: 'h2', //[selector], the first level heading
        subheading: 'h3', //[selector], the second level heading
        reference:'.ref', //[selector], reference element for horizontal positioning
        title: 'Lesson Contents', //[selector or string], title of the menu
        hash: false, //[boolean], setting true will enable URL hashing on click
        offsetTop: '25em', //[number], spacing/margin above the menu
        speed: 800, //[number or string ('slow' & 'fast')], duration of the animation when jumping to the clicked content
        collapsible: false, //[boolean], enabling true will auto collapse sub level heading not being scrolled into
        maxWidth: '18em' //[number], set max-width of the navigation menu
    });*/
    
})();