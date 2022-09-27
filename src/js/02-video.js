import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
};

const savedTime = localStorage.getItem('videoplayer-current-time');

iframePlayer.setCurrentTime(savedTime);

