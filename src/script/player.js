const player = $('#api-player');
const playerContainer = $('.player');

$().ready(function() {
  let interval;
  let volInterval;
  
  if (typeof interval !== 'undefined' && typeof volInterval !== 'undefined') {
    clearInterval(interval);
    clearInterval(volInterval);
  }
  
  interval = setInterval(() => {
    const durationSec = player[0].duration;
    const completedSec = player[0].currentTime;
    const completedPercent = (completedSec / durationSec) * 100;
    
    $('.player__playback-btn').css('left', `${completedPercent}%`);
  }, 1000);

  volInterval = setInterval(() => {
    const currVol = player[0].volume;
    const currVolPercent = 100 - 10 - currVol * 90;
    
    $('.player__volume-ctrl-btn').css('right', `${currVolPercent}%`);
  }, 100);
})

let eventsInit = () => {

  const playVideo = function () {
    if (player[0].paused) {
      playerContainer.addClass('active paused');
      player[0].play();     
    } else {
      playerContainer.removeClass('paused');
      player[0].pause();
    }
  }

  const muteOn = () => {
    playerContainer.addClass('muted');
    player[0].muted = true;
  }

  const muteOff = () => {
    playerContainer.removeClass('muted');
    player[0].muted = false;
  }
  
  const muteAudio = function () {
    if (player[0].muted) {
      muteOff();
    } else {
      muteOn();
    }
  }
    
  $('.player__start').on('click', e => {
    e.preventDefault();
    playVideo();
  })

  $('.player__splash').on('click', e => {
    playVideo();
  })

  $('.player__elem').on('click', e => {
    e.preventDefault();
    playVideo();
  })

  $('.player__mute').on('click', e => {
    e.preventDefault();
    muteAudio();
  })

  player.on('ended', function () {
    playerContainer.removeClass('active paused');
    player[0].currentTime = 0;
  })

  $('.player__playback').on('click', e => {
    const bar = $(e.currentTarget);
    const clickedPlayPosition = e.originalEvent.layerX;
    const btnClickPositionPercent = (clickedPlayPosition / bar.width()) * 100;
    const btnClickPlayPositionSec = (player[0].duration / 100) * btnClickPositionPercent;

    player[0].currentTime = btnClickPlayPositionSec;

    $('.player__playback-btn').css('left', `${btnClickPositionPercent}%`);
  })

  $('.player__volume-ctrl').on('click', e => {
    const volumeBar = $(e.currentTarget);
    const clickedVolumePos = e.originalEvent.layerX;
    const btnVolumeClickPosPercent = (clickedVolumePos / volumeBar.width()) * 100;
    const btnClickVolume = (1 / 100) * btnVolumeClickPosPercent;
    const btnClickVolumePos = 100 - btnVolumeClickPosPercent - 10;

    player[0].volume = btnClickVolume;

    $('.player__volume-ctrl-btn').css('right', `${btnClickVolumePos}%`);
  })
  
  $(window).on('keydown', e => {
    const video = $('.player-section').hasClass('active');
    const volume = playerContainer.hasClass('paused');

    const moveNext = () => {
      let next = player[0].currentTime + 5;

      if (next > player[0].duration) {
        next = player[0].duration - 1;
      }

      player[0].currentTime = next;
    }

    const movePrev = () => {
      let prev = player[0].currentTime - 5;

      if (prev < 0) {
        prev = 0;
      }

      player[0].currentTime = prev;
    }

    const volumeUp = () => {
      let up = player[0].volume + 0.05;

      if (up > 1) {
        up = 1;
      }

      player[0].volume = up;
    }

    const volumeDown = () => {
      let down = player[0].volume - 0.05;

      if (down < 0) {
        down = 0;
        muteOn();
      }

      player[0].volume = down;
    }
    
    if (video) {    
      switch (e.keyCode) {
        case 32:
          playVideo();
          break;
        
        case 37:
          movePrev();
          break;
          
        case 39:
          moveNext();
          break;        
      }
    }

    if (volume) {
      switch(e.keyCode) {
        case 38:
          volumeUp();
          muteOff();
          break;
            
        case 40:
          volumeDown();
          break;
      }
    }
  });
};

eventsInit();