import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const trackTime = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(data) {
  const currenTime = data.seconds;

  localStorage.setItem(trackTime, currenTime);
}

player.setCurrentTime(localStorage.getItem(trackTime) || 0);