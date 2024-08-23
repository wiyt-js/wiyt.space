document.getElementById('mishy-bgm').volume = 0.5;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var tagScriptFirst = document.getElementsByTagName('script')[0];
tagScriptFirst.parentNode.insertBefore(tag, tagScriptFirst);

var current_video_id;
var player;
var stopPlayAt = 10, stopPlayTimer;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        videoId: current_video_id,
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

function b64Encode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

function b64Decode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

document.querySelectorAll('#video-list > li').forEach(element => {
    element.addEventListener("click", function() {
        if(player.getVideoData()['video_id'] != element.id) {
            player.loadVideoById(element.id);
            document.getElementById('player').style.display = "block";
            document.getElementById('videos').scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
