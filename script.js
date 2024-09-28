// list hide unhide content

    $(document).ready(function() {
        $('.dropdown .nav-item').click(function() {
            console.log('Clicked'); // Debug log
            $(this).siblings('.nav-content').slideToggle();
            $(this).find('.arrow').toggleClass('down');
        });
    });

    $(document).ready(function() {
        console.log("easter egg here u go: https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      });
