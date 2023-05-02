const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const updateTime = () => {
    VideoColorSpace.getCurrentTime().then(throttle(seconds => {
        localStorage.setItem('videoplayer-current-time', seconds)
    }, 1000)
    )
}