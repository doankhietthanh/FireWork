const songs = [
  {
    name: "Ngày Tết Quê Em",
    singer: "Hồ Ngọc Hà",
    path: "https://aredir.nixcdn.com/NhacCuaTui200/NgayTetQueEm-HoNgocHa-VMusic-Min_3kpfq.mp3?st=4U7CO_i2F036MqttZ41Z2w&e=1643648359",
    image:
      "https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/08/14/5/1/1/9/1597380071736_600.jpg",
  },
  {
    name: "Con Bướm Xuân",
    singer: "Hồ Quang Hiếu",
    path: "https://aredir.nixcdn.com/NhacCuaTui926/ConBuomXuan-HoQuangHieu-2577880.mp3?st=xSWGefxY0P9da_T6YMZhOw&e=1643708690",
    image:
      "https://avatar-ex-swe.nixcdn.com/song/2020/01/20/3/e/d/c/1579487864483.jpg",
  },
  {
    name: "Muộn Rồi Mà Sao Còn",
    singer: "Sơn Tùng M-TP",
    path: "https://c1-ex-swe.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=tD-Ln6qGqkdH659AeuHsjQ&e=1638782546",
    image:
      "https://avatar-nct.nixcdn.com/song/2021/04/29/9/1/f/8/1619691182261.jpg",
  },
  {
    name: "Thức Giấc",
    singer: "Da LAB",
    path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1018/ThucGiac-DaLAB-7048212.mp3?st=1LcQhTisk8WrOQuzK4p86Q&e=1638782708",
    image:
      "https://avatar-nct.nixcdn.com/song/2021/07/14/8/c/f/9/1626231010810.jpg",
  },
  {
    name: "Chúc Tết Mọi Nhà",
    singer: "Hồ Ngọc Hà, Noo Phước Thịnh",
    path: "https://aredir.nixcdn.com/NhacCuaTui934/ChucTetMoiNha-HoNgocHaNooPhuocThinh-4721729.mp3?st=VXl4YNXiyC3p4AaDj0ei-A&e=1643648475",
    image:
      "https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/08/14/5/1/1/9/1597380071736.jpg",
  },
  {
    name: "Chúng Ta Sau Này",
    singer: "T.R.I",
    path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1010/ChungTaSauNay-TRI-6929586.mp3?st=l56Wr1fLE9fMnFehhpo5xg&e=1638782875",
    image:
      "https://avatar-nct.nixcdn.com/song/2021/01/27/5/2/2/b/1611738358661.jpg",
  },
  {
    name: "Dịu Dàng Em Đến",
    singer: "ERIK, NinjaZ",
    path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1021/DiuDangEmDen-ERIKNinjaZ-7078877.mp3?st=QmjyqbnGv3jClPKm4oA1YQ&e=1638782938",
    image:
      "https://avatar-nct.nixcdn.com/song/2021/08/30/2/1/a/e/1630307726211.jpg",
  },
  {
    name: "Hương",
    singer: "Văn Mai Hương, Negav",
    path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1010/Huong-VanMaiHuongNegav-6927340.mp3?st=PvHOWlRnF6TymvggYGding&e=1638783027",
    image:
      "https://avatar-nct.nixcdn.com/song/2021/01/22/9/f/2/1/1611280898757.jpg",
  },
  {
    name: "Miên Man",
    singer: "DUTZUX",
    path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1024/MienMan-DUTZUX-7120884.mp3?st=yTOFq5aH8FGEvbm-_n_KTA&e=1638783090",
    image:
      "https://avatar-nct.nixcdn.com/song/2021/11/19/6/d/9/1/1637320885751.jpg",
  },
  {
    name: "Có Hẹn Với Thanh Xuân",
    singer: "MONSTAR",
    path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1020/cohenvoithanhxuan-MONSTAR-7050201.mp3?st=PjrrnZ2dZ3ffA6R7dRrppQ&e=1638783161",
    image:
      "https://avatar-nct.nixcdn.com/song/2021/07/16/f/4/9/8/1626425507034.jpg",
  },
];

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $(".player");
const playlist = $(".playlist");
const progress = $(".progress");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const repeatBtn = $(".btn-repeat");
const randomBtn = $(".btn-random");

let isPlaying = false;
let isRandom = false;
let isRepeat = false;

let currentIndex = 0;

const firework = $(".firework");
const container = $(".countdown-container");
const footer = $("footer");
const countdownAudio = $("#countdown-audio");
const secondsElement = $("#seconds");
const items = $$(".deadline-format h4");

// const timeNow = new Date().getTime();
const futureDate = new Date(2022, 1, 1, 0, 0, 0);
const futureTime = futureDate.getTime();

const getTime = () => {
  const currentTime = new Date().getTime();

  const time = futureTime - currentTime;

  const oneMinute = 60 * 1000;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  const days = Math.floor(time / oneDay);
  const hours = Math.floor((time % oneDay) / oneHour);
  const minutes = Math.floor((time % oneHour) / oneMinute);
  const seconds = Math.floor((time % oneMinute) / 1000);

  const value = [days, hours, minutes, seconds];

  const formatValue = (item) => {
    if (item < 10) return (item = `0${item}`);
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = formatValue(value[index]);
  });

  if (time < 30 * 1000) {
    audio.pause();
  }

  if (time < 12 * 1000 && time > 0) {
    secondsElement.style = "animation: zoom-in-zoom-out 1s ease infinite;";
    countdownAudio.play();
  }

  if (time < 1 * 1000) {
    clearInterval(countdown);

    container.style.display = "none";
    footer.style.display = "none";
    firework.style.display = "block";

    addScript("./js/firework.js");
  }
};

const addScript = (src) => {
  var s = document.createElement("script");
  s.setAttribute("src", src);
  document.body.appendChild(s);
};

let countdown = setInterval(getTime, 1000);

getTime();

const cdWidth = cd.offsetWidth;
const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
  duration: 10000,
  iterations: Infinity,
});
cdThumbAnimate.pause();

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});

audio.addEventListener("play", () => {
  isPlaying = true;
  player.classList.add("playing");
  cdThumbAnimate.play();
});

audio.addEventListener("pause", () => {
  isPlaying = false;
  player.classList.remove("playing");
  cdThumbAnimate.pause();
});

// Xử lí chỉnh time bài hát
audio.addEventListener("timeupdate", () => {
  const progressPercent = Math.floor(
    (audio.currentTime / audio.duration) * 100
  );
  progress.value = progressPercent;
});

progress.addEventListener("change", (e) => {
  audio.currentTime = (e.target.value / 100) * audio.duration;
});

//Khi next, prev, random bài hát
nextBtn.addEventListener("click", () => {
  nextSong();
  audio.play();
});

prevBtn.addEventListener("click", () => {
  prevSong();
  audio.play();
});

randomBtn.addEventListener("click", () => {
  isRandom = !isRandom;
  randomBtn.classList.toggle("active", isRandom);

  isRepeat = false;
  repeatBtn.classList.toggle("active", isRepeat);
});

repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);

  isRandom = false;
  randomBtn.classList.toggle("active", isRandom);
});

audio.addEventListener("ended", () => {
  if (isRepeat) {
    audio.play();
  } else {
    nextSong();
  }

  if (isRandom) {
    randomSong();
  }
  audio.play();
});

function loadCurrentSong() {
  heading.textContent = songs[currentIndex].name;
  cdThumb.style.backgroundImage = `url("${songs[currentIndex].image}")`;
  audio.src = songs[currentIndex].path;
}

function nextSong() {
  currentIndex++;
  if (currentIndex >= songs.length) {
    currentIndex = 0;
  }
  loadCurrentSong();
}

function prevSong() {
  if (currentIndex <= 0) {
    currentIndex = songs.length;
  }
  currentIndex--;
  loadCurrentSong();
}

function randomSong() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * songs.length);
  } while (newIndex === currentIndex);

  currentIndex = newIndex;
  loadCurrentSong();
}

loadCurrentSong();
