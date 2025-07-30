const songs = {
  happy: [
    { title: "Vaathi Coming - Master", video: "https://www.youtube.com/embed/UEl4pT1kGqY" },
    { title: "Jimikki Kammal", video: "https://www.youtube.com/embed/TJOP5WqI6D8" },
    { title: "Aathichudi - TN 07 AL 4777", video: "https://www.youtube.com/embed/lF8P5wrKZV0" }
  ],
  sad: [
    { title: "Unna Nenachu - Psycho", video: "https://www.youtube.com/embed/C05-BYt3YuQ" },
    { title: "Ninaithu Ninaithu - 7G Rainbow Colony", video: "https://www.youtube.com/embed/mtDKVg6vW94" },
    { title: "Oru Naalil - Pudhupettai", video: "https://www.youtube.com/embed/NuZy6z2t49A" }
  ],
  love: [
    { title: "Kadhal Kan Kattudhe", video: "https://www.youtube.com/embed/s-4TP_gjH5Q" },
    { title: "Enna Solla Pogirai", video: "https://www.youtube.com/embed/l5p_P86aJ2U" },
    { title: "Munbe Vaa - Sillunu Oru Kadhal", video: "https://www.youtube.com/embed/f5gOtEk8G-Q" }
  ],
  party: [
    { title: "Aaluma Doluma - Vedalam", video: "https://www.youtube.com/embed/HBPSQffVUbw" },
    { title: "Sodakku - Thaanaa Serndha Koottam", video: "https://www.youtube.com/embed/6SOZtrLZ2Ts" },
    { title: "Local Boys - Ethir Neechal", video: "https://www.youtube.com/embed/q9xQIbRwffg" }
  ],
  calm: [
    { title: "Pachai Nirame - Alaipayuthey", video: "https://www.youtube.com/embed/R_dP4P82fQE" },
    { title: "Engeyum Eppodhum", video: "https://www.youtube.com/embed/7ALa9Uu1CyY" },
    { title: "Vennilave - Minsara Kanavu", video: "https://www.youtube.com/embed/H5uYbnS-5ic" }
  ],
  angry: [
    { title: "Thee Illai - Arima Nambi", video: "https://www.youtube.com/embed/i38mWnmkZAw" },
    { title: "Udhungada Sangu - VIP", video: "https://www.youtube.com/embed/LctbYWwMZPw" },
    { title: "Yaar Ivan", video: "https://www.youtube.com/embed/fmyT5AP7nrs" }
  ],
  romantic: [
    { title: "Anbil Avan - Vinnaithaandi Varuvaayaa", video: "https://www.youtube.com/embed/LNtvAT1oI7k" },
    { title: "Thalli Pogathey", video: "https://www.youtube.com/embed/Du5gTVbHb6A" },
    { title: "Neeyum Naanum Anbe", video: "https://www.youtube.com/embed/cWhZB6TfIgg" }
  ],
  energetic: [
    { title: "Don'u Don'u Don'u - Maari", video: "https://www.youtube.com/embed/o6ZpY8VwBnc" },
    { title: "Oodha Coloru Ribbon", video: "https://www.youtube.com/embed/rp4k5zAIFxI" },
    { title: "Mersal Arasan", video: "https://www.youtube.com/embed/f2I_tFfMZFI" }
  ]
};

function typeWriter(element, text, i = 0) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1), 50);
  }
}

function showSongs(mood) {
  const container = document.getElementById("cardSection");
  container.innerHTML = "";

  songs[mood].forEach(song => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    card.appendChild(title);
    typeWriter(title, song.title);

    const iframe = document.createElement("iframe");
    iframe.src = song.video;
    iframe.allowFullscreen = true;
    card.appendChild(iframe);

    container.appendChild(card);
  });
}
