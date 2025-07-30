const songs = {
  happy: [
    {
      title: "Vaathi Coming",
      video: "https://www.youtube.com/watch?v=UTI0X0UeE-A",
      img: "https://img.youtube.com/vi/UTI0X0UeE-A/hqdefault.jpg"
    },
    {
      title: "Jimikki Kammal",
      video: "https://www.youtube.com/watch?v=y3wiW1aUQ00",
      img: "https://img.youtube.com/vi/y3wiW1aUQ00/hqdefault.jpg"
    }
  ],
  sad: [
    {
      title: "Unna Nenachu",
      video: "https://www.youtube.com/watch?v=pxCzxxjP-TM",
      img: "https://img.youtube.com/vi/pxCzxxjP-TM/hqdefault.jpg"
    }
  ],
  love: [
    {
      title: "Kadhal Kan Kattudhe",
      video: "https://www.youtube.com/watch?v=TblG93FZktc",
      img: "https://img.youtube.com/vi/TblG93FZktc/hqdefault.jpg"
    }
  ],
  party: [
    {
      title: "Aaluma Doluma",
      video: "https://www.youtube.com/watch?v=yvAxVj9TFAw",
      img: "https://img.youtube.com/vi/yvAxVj9TFAw/hqdefault.jpg"
    }
  ],
  calm: [
    {
      title: "Pachai Nirame",
      video: "https://www.youtube.com/watch?v=YY9MjGFfqx4",
      img: "https://img.youtube.com/vi/YY9MjGFfqx4/hqdefault.jpg"
    }
  ],
  angry: [
    {
      title: "Udhungada Sangu",
      video: "https://www.youtube.com/watch?v=NsHY5JqShRM",
      img: "https://img.youtube.com/vi/NsHY5JqShRM/hqdefault.jpg"
    }
  ],
  romantic: [
    {
      title: "Thalli Pogathey",
      video: "https://www.youtube.com/watch?v=YpuaZ5N1XZg",
      img: "https://img.youtube.com/vi/YpuaZ5N1XZg/hqdefault.jpg"
    }
  ],
  energetic: [
    {
      title: "Don'u Don'u Don'u",
      video: "https://www.youtube.com/watch?v=A4MmvMwqY8M",
      img: "https://img.youtube.com/vi/A4MmvMwqY8M/hqdefault.jpg"
    }
  ]
};

function showSongs(mood) {
  const container = document.getElementById("cardSection");
  container.innerHTML = "";

  songs[mood].forEach(song => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = song.img;
    img.alt = song.title;

    const title = document.createElement("h3");
    title.textContent = song.title;

    card.appendChild(img);
    card.appendChild(title);

    card.addEventListener("click", () => {
      window.open(song.video, "_blank");
    });

    container.appendChild(card);
  });
}
