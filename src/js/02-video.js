const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

if (localStorage.getItem(CURRENT_TIME_KEY)) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
}

const onPlay = e => {
    player
        .getCurrentTime()
        .then(function (seconds) {
            localStorage.setItem(CURRENT_TIME_KEY, seconds);
        })
        .catch(function (error) {
            console.log(error.name);
            console.log(error.message);
        });
};

const throttled = throttle(onPlay, 1000);

player.on('timeupdate', throttled);

