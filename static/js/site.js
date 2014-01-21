$(document).ready(function(){
    if (SETTINGS.twitter) {
        $('#social').append('<div class="tweet"></div>')
        $('head').append('<script src="static/js/jquery.tweet.js" type="text/javascript" ><\/script>');
        $('head').append('<script src="static/js/plugins/social/twitter.js" type="text/javascript" ><\/script>');
        $('head').append('<link href="static/css/jquery.tweet.css" rel="stylesheet" type="text/css">');
        $('#hashtag').text(SETTINGS.hashtag);
        $('#social').show();
    } else {
        $("#social-tab").hide();
        $("#comment-tab").addClass("active");
        $("#comments").addClass("active");
    }
    if (! SETTINGS.comments) {
        $('#comment-tab').hide();
        $("#comments").removeClass("active").hide();
    }
    if (! SETTINGS.comments && ! SETTINGS.twitter) {
        $(".nav-tabs").hide();
    }
});