/**
 * Created by root on 9/30/15.
 */


$(function() {
    $('.gplus2').kycoGooglePlusFeed2({
        id: '105776773930659797989',
        feedPosts: 2, // Feed posts to show on load
        postsIncrement: 1, // Number of feed posts to show on "Show more" button click
        maxPosts: 3, // Max number of posts to pull before "Show more" will go to Google+, cannot excced 20 because of Google API in use
        profileImageSize: 50, // Max is 250
        orderBy: 'popularity',
        sort: 'asc',
        lang: 'en'
    });

    var twit = 0;
    var goog = 0;

    $('#googleWidget').hide();



    $('#twitterWidgetBtn').on('click', function () {
        var twit = 1;
        if(twit == 1) {
            $('#googleWidgetBtn').removeClass('btn-material-teal-300');
            $('#twitterWidgetBtn').addClass('btn-material-teal-300');
            $('#twitterWidget').slideDown(500);
            $('#googleWidget').slideUp(600);

        }
    });

    $('#googleWidgetBtn').on('click', function () {
        var goog = 1;
        if(goog == 1) {
            $('#twitterWidgetBtn').removeClass('btn-material-teal-300');
            $('#googleWidgetBtn').addClass('btn-material-teal-300');
            $('#googleWidget').slideDown(500);
            $('#twitterWidget').slideUp(800);
        }//end if
    });
});