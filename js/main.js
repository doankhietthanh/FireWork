const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const firework = document.querySelector(".firework");
const deadline = document.querySelector(".deadline");
const footer = document.querySelector("footer");
const countdownAudio = document.querySelector("#countdown-audio");
const secondsElement = document.querySelector("#seconds");
const items = document.querySelectorAll(".deadline-format h4");

const futureDate = new Date(2022, 0, 11, 11, 52, 00);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

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

  if (time < 12 * 1000 && time > 0) {
    secondsElement.style = "animation: zoom-in-zoom-out 1s ease infinite;";
    countdownAudio.play();
  }
  if (time < 1 * 1000) {
    clearInterval(countdown);

    deadline.style.display = "none";
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
