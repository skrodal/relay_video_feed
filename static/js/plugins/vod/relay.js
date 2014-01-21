/*
    Get videos from a web server hosting Relay media.

    This server must provide a service (presumingly JSONP) that provides required metadata for content.
*/

$(window).load(function() {    
    $.getJSON('https://screencast.relaymedia.domain/relay/api/?&user=' + SETTINGS.relay_user + '&callback=?', function(data){
        $.each(data, function(index, entry){
            // Metadata pulled from screencast relay API:
            var author = entry['author'];           // Presenter
            var title = entry['title'];
            var videoid = entry['url'];
            var description = entry['description'];
            var thumbnail = entry['thumbnail'];     // null if not present
            var date = entry['date'];               // DD MONTH YYYY
            var filesize = entry['filesize'];       // In human readable format (B/KB/MB...)
            var duration = entry['duration'];       // In human readable format (xTxMxS)
            var width = entry['width']; 
            var height = entry['height'];

            // Presentation listing
            var elem = $(
                '<div style="min-height:150px; margin-bottom: 20px;cursor: pointer;">' +
                '<div class="thumbnail-clip">' +
                '<img style="float:left;padding-right: 20px;padding-bottom: 10px;" src="' + thumbnail + '">' +
                '</div>' +
                '<h2 id=' + videoid + '>' + title + '</h2>' +
                '<h6>' + author + ' | ' + date + ' | ' + filesize + ' | ' + duration + '</h2>' +
                '<p>' + description + '</p>' + //<a href="#' + videoid + '"> Link</a></p>' +
                '</div><hr>'
            );
            $('#videos').append(elem);

            // Action when clicking on a presentation in the list
            $(elem).click(function() {
                // Make a backup of this presentation list item
                var elemclone = $(this).clone(true);
                //var iframe = $('<h2 id=' + videoid + '>' + title + '</h2><span class="pull-right" style="margin-top:-20px;cursor:pointer;"><i class="icon-remove-sign"></i> Close</span><br><div class="embed-container"><iframe src="' + videoid + '?autoplay=true" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div><br><p>' + description + '<a href="#' + videoid + '"> Link</a></p>');
                /*var iframe = $(
                    '<h2 id=' + videoid + '>' + title + '</h2>' + 
                    '<span class="pull-right" style="margin-top:-20px;cursor:pointer;"><i class="icon-remove-sign"></i> Close</span><br>' + 
                    '<div class="embed-container">' +
                        '<iframe seamless src="' + videoid + '?autoplay=true" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' + 
                    '</div><br><p>' + description + '<a href="#' + videoid + '"> Link</a></p>');
                */
                // Build a video frame for the presentation
                var videoframe = $( 
                            '<h2 id=' + videoid + '>' + title + '</h2>' + 
                            '<span class="pull-right" style="margin-top:-20px;cursor:pointer;"><i class="icon-remove-sign"></i> Lukk</span><br>' + 
                            '<div class="embed-container">' +
                                '<video src='+videoid+' poster='+thumbnail+' type="video/mp4" width='+width+' height='+height+' autoplay controls>' +
                                  'Your browser does not support HTML5 video. You may download the video <a href="'+videoid+'">here</a> and play back locally.' +
                                '<video>' +
                            '</div>' +
                            '<br><p>' + description + '</p>' +
                            '<span class="pull-right" style="margin-top:-20px;cursor:pointer;"><a href="' + videoid + '">Download</a></span>'
                            );

                // Restore presentation list item on click
                $(videoframe).click(function() { $(videoframe).replaceWith(elemclone) });
                // Show videoframe when clicking the presentation list item
                $(this).replaceWith(videoframe);
            });
         });

        if (window.location.hash) {
            var f = $(window.location.hash).offset().top;
            $("body").scrollTop(f);
        }
    });
    $("#video-progress").hide();
    $("#videos").show();

});