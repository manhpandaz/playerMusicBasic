const playList = [
  {
    id: 1,
    nameSong: "Con mua ngang qua",
    sing: "Son tung mtp",
    path: "./music/ConMuaNgangQua-SonTungMTP-2944936.mp3",
  },
  {
    id: 2,
    nameSong: "Waiting for love",
    sing: "Avicii",
    path: "./music/Avicii_-_Waiting_For_Love.mp3",
  },
  {
    id: 3,
    nameSong: "Wake me up",
    sing: "Avicii",
    path: "./music/Avicii_-_Wake_Me_Up.mp3",
  },
  {
    id: 4,
    nameSong: "nang am xa dan",
    sing: "Son tung mtp",
    path: "./music/NangAmXaDanLofi.mp3",
  },
  {
    id: 5,
    nameSong: "The River",
    sing: "Axel Johansson",
    path: "./music/TheRiver.mp3",
  },
];

// class song {
//   constructor() {
//     this.id = id;
//     this.nameSong = nameSong;
//     this.sing = sing;
//     this.path = path;
//   }
// }

class playerMusic {
  constructor() {
    this.audio = new Audio();
    this.playList = [];
    this.currentSongIndex = 0;
    this.isPlaying = false;
  }

  addPlayList(playList) {
    this.playList.push(playList);
  }

  playerMusic() {
    this.isPlaying = true;
    const currentSong = this.playList[this.currentSongIndex];
    this.audio.src = currentSong.path;
    this.audio.play();
    this.getSong();
    this.getSing();
  }

  getSong() {
    const currentNameSong = this.playList[this.currentSongIndex].nameSong;
    const nameSong = document.querySelector(".song-name");
    nameSong.textContent = "song:" + currentNameSong;
    // this.nameSong = curentNameSong;
  }
  getSing() {
    const currentSong = this.playList[this.currentSongIndex];
    const singer = document.querySelector(".sing");
    singer.textContent = "singer:" + currentSong.sing;
  }

  pauseMusic() {
    this.isPlaying = false;
    this.audio.pause();
  }

  // toggleMusic() {
  //   if (this.isPlaying == true) {
  //     this.playerMusic();
  //   } else {
  //     this.pauseMusic();
  //   }
  // }

  prev() {
    if (this.currentSongIndex === 0) {
      this.currentSongIndex = this.playList.length - 1;
    } else {
      this.currentSongIndex--;
    }
    this.playerMusic();
    console.log(this.currentSongIndex);
  }

  next() {
    if (this.currentSongIndex >= this.playList.length) {
      this.currentSongIndex = 0;
    } else {
      this.currentSongIndex++;
    }
    this.playerMusic();
    console.log(this.currentSongIndex);
  }
}

const player = new playerMusic();

playList.forEach((song) => {
  player.addPlayList(song);
});

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

playBtn.addEventListener("click", () => {
  player.playerMusic();
});

pauseBtn.addEventListener("click", () => {
  player.pauseMusic();
});

prevBtn.addEventListener("click", () => {
  player.prev();
});

nextBtn.addEventListener("click", () => {
  player.next();
});
