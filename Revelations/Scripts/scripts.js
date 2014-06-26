/*-----------------------------------------------------------------------------------*/
/*	POSTS GRID
/*-----------------------------------------------------------------------------------*/
$(window).load(function () {
    var $container = $('.blog-grid');

    var gutter = 30;
    var min_width = 345;
    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: '.post',
            gutterWidth: gutter,
            isAnimated: true,
            columnWidth: function (containerWidth) {
                var box_width = (((containerWidth - gutter) / 2) | 0);

                if (box_width < min_width) {
                    box_width = (((containerWidth - gutter) / 2) | 0);
                }

                if (box_width < min_width) {
                    box_width = containerWidth;
                }

                $('.post').width(box_width);

                return box_width;
            }
        });
        $container.css('visibility', 'visible').parent().removeClass('loading');
    });
});

/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
    $('.video').fitVids();
});


/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
    $("a.button, .forms fieldset .btn-submit, #commentform input#submit").css("opacity", "1.0");
    $("a.button, .forms fieldset .btn-submit, #commentform input#submit").hover(function () {
        $(this).stop().animate({ opacity: 0.85 }, "fast");
    },
    function () {
        $(this).stop().animate({ opacity: 1.0 }, "fast");
    });
});

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
    $('.quick-flickr-item').addClass("frame");
    $('.frame a').prepend('<span class="more"></span>');
});

jQuery(document).ready(function ($) {
    $('.frame').mouseenter(function (e) {

        $(this).children('a').children('span').fadeIn(300);
    }).mouseleave(function (e) {

        $(this).children('a').children('span').fadeOut(200);
    });
});


/*-----------------------------------------------------------------------------------*/
/*	TWITTER
/*-----------------------------------------------------------------------------------*/

getTwitters('twitter', {
    id: 'elemisdesign',
    count: 2,
    enableLinks: true,
    ignoreReplies: false,
    template: '<span class="twitterPrefix"><span class="twitterStatus">%text%</span><br /><em class="twitterTime"><a href="http://twitter.com/%user_screen_name%/statuses/%id%">%time%</a></em>',
    newwindow: true
});

/*-----------------------------------------------------------------------------------*/
/*	FLICKR
/*-----------------------------------------------------------------------------------*/

$(document).ready(function ($) {
    $('.flickr-feed').dcFlickr({
        limit: 9,
        q: {
            id: '51789731@N07',
            lang: 'en-us',
            format: 'json',
            jsoncallback: '?'
        },
        onLoad: function () {
            $('.frame a').prepend('<span class="more"></span>');
            $('.frame').mouseenter(function (e) {

                $(this).children('a').children('span').fadeIn(300);
            }).mouseleave(function (e) {

                $(this).children('a').children('span').fadeOut(200);
            });
        }
    });
});

/*-----------------------------------------------------------------------------------*/
/*	AUDIO PLAYER
/*-----------------------------------------------------------------------------------*/

$(window).load(function () {
    $('.blog-grid audio').mediaelementplayer({
        audioWidth: '100%',
        features: ['playpause', 'progress', 'tracks'],
        videoVolume: 'horizontal'
    });
});

jQuery(document).ready(function ($) {
    $('.single audio').mediaelementplayer({
        audioWidth: '100%',
        features: ['playpause', 'progress', 'tracks'],
        videoVolume: 'horizontal'
    });
});




/*-----------------------------------------------------------------------------------*/
/*	BOOTSTRAP
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
    $('#signup-btn').on('click', function () {
        //remove active class from all links and buttons
        $(".tab-pane").removeClass("active");
        $(".tab-btn").removeClass("active");
        $('#register').modal('show')
        $('#signup').addClass('active');
        $('#login-tab').removeClass('active');
        $('#signup-tab').addClass('active');
    });
    $('#login-btn').on('click', function () {
        //remove active class from all links and buttons
        $(".tab-pane").removeClass("active");
        $('#signup-tab').removeClass('active');
        $(".tab-btn").removeClass("active");
        $('#register').modal('show')
        $('#login').addClass('active');
        $('#login-tab').addClass('active');
    });
    $('#message').hide();
});

$('#Username').blur(function () {
    var username = $('#Username').val();
    $.getJSON("/Home/CheckUsername?name=" + username, function (data) {
        $('#message').show();
        if (data) {
            $('#message').text('Username in use');
            $('#message').delay(4000).fadeOut();
        }
        else {
            $('#message').addClass('okay-box');
            $('#message').text('All set');
            $('#message').delay(4000).fadeOut();
        }
    });
});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
    mainmenuid: "menu",
    orientation: 'h',
    classname: 'menu',
    contentsource: "markup"
});
function checkuserpass() {
    var flag = false;
    var user = $('#user').val();
    var pass = $('#pass').val();
    $.ajaxSetup({
        async: false
    });
    $.getJSON('/Home/CheckUsernamePass?name=' + user + '&pass=' + pass, function (data) {
        if (data)
            flag = true;
        else {
            $('#login-message').text('Username and/or Password doesn\'t match');
            flag = false;
        }
    });
    $.ajaxSetup({
        async: false
    });
    return flag;
}