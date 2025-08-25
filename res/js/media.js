var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var tagScriptFirst = document.getElementsByTagName('script')[0];
tagScriptFirst.parentNode.insertBefore(tag, tagScriptFirst);

var player;
var stopPlayAt = 10, stopPlayTimer;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        videoId: 'wv2R-NZmmjs',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    var time, rate, remaining;
    clearTimeout(stopPlayTimer);
    if(event.data == YT.PlayerState.PLAYING && !done) {
        time = player.getCurrentTime();
        if((time + 0.4) < stopPlayAt) {
            rate = player.getPlaybackRate();
            remaining = (stopPlayAt - time) / rate;
            stopPlayTimer = setTimeout(stopVideo, remaining * 1000);
        }
    }
}

function stopVideo() {
    player.stopVideo();
}

document.querySelectorAll('#video-list > li').forEach(element => {
    element.addEventListener("click", function() {
        player.loadVideoById(element.id);
        document.getElementById('player').style.display = "block";
        document.getElementById('videos').scrollIntoView({
            behavior: "smooth"
        });
    });
});