const songs = {
  happy: [
    { title: "Vaathi Coming - Master", video: "https://www.youtube.com/embed/UTI0X0UeE-A" },
    { title: "Jimikki Kammal - Velipadinte Pusthakam", video: "https://www.youtube.com/embed/y3wiW1aUQ00" },
    { title: "Aathichudi - TN 07 AL 4777", video: "https://www.youtube.com/embed/GH5VmIipuxc" }
  ],
  sad: [
    { title: "Unna Nenachu - Psycho", video: "https://www.youtube.com/embed/pxCzxxjP-TM" },
    { title: "Ninaithu Ninaithu - 7G Rainbow Colony", video: "https://www.youtube.com/embed/K3KnWh1cw9A" },
    { title: "Oru Naalil - Pudhupettai", video: "https://www.youtube.com/embed/8f5cZ28wErk" }
  ],
  love: [
    { title: "Kadhal Kan Kattudhe", video: "https://youtu.be/DjgwkfFnakM?si=GGQa-y0LPMYoxK4D" },
    { title: "Enna Solla Pogirai", video: "https://www.youtube.com/embed/Qk19z8dN3HU" },
    { title: "Munbe Vaa - Sillunu Oru Kaadhal", video: "https://www.youtube.com/embed/J40A3iQ9z1Y" }
  ],
  party: [
    { title: "Aaluma Doluma - Vedalam", video: "https://www.youtube.com/embed/yvAxVj9TFAw" },
    { title: "Sodakku - Thaanaa Serndha Koottam", video: "https://www.youtube.com/embed/qvOTIpRylNw" },
    { title: "Local Boys - Ethir Neechal", video: "https://www.youtube.com/embed/Tya3vY1fYwQ" }
  ],
  calm: [
    { title: "Pachai Nirame - Alaipayuthey", video: "https://www.youtube.com/embed/YY9MjGFfqx4" },
    { title: "Engeyum Eppothum", video: "https://www.youtube.com/embed/M4h18ZocPfA" },
    { title: "Vennilave - Minsara Kanavu", video: "https://www.youtube.com/embed/jXDBPivT2T8" }
  ],
  angry: [
    { title: "Thee Illai - Arima Nambi", video: "https://www.youtube.com/embed/WK3zrQ7A59c" },
    { title: "Udhungada Sangu - VIP", video: "https://www.youtube.com/embed/NsHY5JqShRM" },
    { title: "Yaar Ivan", video: "https://www.youtube.com/embed/madI9G1CtSg" }
  ],
  romantic: [
    { title: "Anbil Avan - VTV", video: "https://www.youtube.com/embed/lEPVkmXrUAA" },
    { title: "Thalli Pogathey", video: "https://www.youtube.com/embed/YpuaZ5N1XZg" },
    { title: "Neeyum Naanum Anbe", video: "https://www.youtube.com/embed/MQ9PlR6ZjzU" }
  ],
  energetic: [
    { title: "Don'u Don'u Don'u - Maari", video: "https://www.youtube.com/embed/A4MmvMwqY8M" },
    { title: "Oodha Coloru Ribbon", video: "https://www.youtube.com/embed/v8GO3iHxHfo" },
    { title: "Mersal Arasan - Mersal", video: "https://www.youtube.com/embed/NcV0Lh1V5T4" }
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
