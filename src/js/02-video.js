import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// importy
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const trackTime = 'videoplayer-current-time';
// nazwy 

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));
// uruchomienie throttle 
function onPlayerTimeupdate(data) {
  const currenTime = data.seconds;

  videoTime.setItem(trackTime, currenTime);
}

player.setCurrentTime(videoTime.getItem(trackTime) || 0);