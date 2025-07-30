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
    },
    {
      title: "Chill Bro",
      video: "https://www.youtube.com/watch?v=JpL3gkYJ1Kk",
      img: "https://img.youtube.com/vi/JpL3gkYJ1Kk/hqdefault.jpg"
    }
  ],
  sad: [
    {
      title: "Unna Nenachu",
      video: "https://www.youtube.com/watch?v=pxCzxxjP-TM",
      img: "https://img.youtube.com/vi/pxCzxxjP-TM/hqdefault.jpg"
    },
    {
      title: "Ennodu Nee Irundhaal",
      video: "https://www.youtube.com/watch?v=7qYHscb1Vb4",
      img: "https://img.youtube.com/vi/7qYHscb1Vb4/hqdefault.jpg"
    },
    {
      title: "Oru Naalil",
      video: "https://www.youtube.com/watch?v=3RWrjGJuhUI",
      img: "https://img.youtube.com/vi/3RWrjGJuhUI/hqdefault.jpg"
    }
  ],
  love: [
    {
      title: "Kadhal Kan Kattudhe",
      video: "https://www.youtube.com/watch?v=TblG93FZktc",
      img: "https://img.youtube.com/vi/TblG93FZktc/hqdefault.jpg"
    },
    {
      title: "Enna Solla Pogirai",
      video: "https://www.youtube.com/watch?v=Oy6HKIbfFdw",
      img: "https://img.youtube.com/vi/Oy6HKIbfFdw/hqdefault.jpg"
    },
    {
      title: "Anbil Avan",
      video: "https://www.youtube.com/watch?v=qq_Xy6IopM4",
      img: "https://img.youtube.com/vi/qq_Xy6IopM4/hqdefault.jpg"
    }
  ],
  party: [
    {
      title: "Aaluma Doluma",
      video: "https://www.youtube.com/watch?v=yvAxVj9TFAw",
      img: "https://img.youtube.com/vi/yvAxVj9TFAw/hqdefault.jpg"
    },
    {
      title: "Vaathi Raid",
      video: "https://www.youtube.com/watch?v=zjvYOfn2B94",
      img: "https://img.youtube.com/vi/zjvYOfn2B94/hqdefault.jpg"
    },
    {
      title: "Rowdy Baby",
      video: "https://www.youtube.com/watch?v=x6QZn9xiuOE",
      img: "https://img.youtube.com/vi/x6QZn9xiuOE/hqdefault.jpg"
    }
  ],
  calm: [
    {
      title: "Pachai Nirame",
      video: "https://www.youtube.com/watch?v=YY9MjGFfqx4",
      img: "https://img.youtube.com/vi/YY9MjGFfqx4/hqdefault.jpg"
    },
    {
      title: "Munbe Vaa",
      video: "https://www.youtube.com/watch?v=YuIX6eL6ebM",
      img: "https://img.youtube.com/vi/YuIX6eL6ebM/hqdefault.jpg"
    },
    {
      title: "Vaseegara",
      video: "https://www.youtube.com/watch?v=R-YmHeM69yc",
      img: "https://img.youtube.com/vi/R-YmHeM69yc/hqdefault.jpg"
    }
  ],
  angry: [
    {
      title: "Udhungada Sangu",
      video: "https://www.youtube.com/watch?v=NsHY5JqShRM",
      img: "https://img.youtube.com/vi/NsHY5JqShRM/hqdefault.jpg"
    },
    {
      title: "Surviva",
      video: "https://www.youtube.com/watch?v=XPwVq56lFao",
      img: "https://img.youtube.com/vi/XPwVq56lFao/hqdefault.jpg"
    },
    {
      title: "Danga Maari",
      video: "https://www.youtube.com/watch?v=fWLvItDLgvY",
      img: "https://img.youtube.com/vi/fWLvItDLgvY/hqdefault.jpg"
    }
  ],
  romantic: [
    {
      title: "Thalli Pogathey",
      video: "https://www.youtube.com/watch?v=YpuaZ5N1XZg",
      img: "https://img.youtube.com/vi/YpuaZ5N1XZg/hqdefault.jpg"
    },
    {
      title: "Kanave Kanave",
      video: "https://www.youtube.com/watch?v=XzErQ9N4mLQ",
      img: "https://img.youtube.com/vi/XzErQ9N4mLQ/hqdefault.jpg"
    },
    {
      title: "New York Nagaram",
      video: "https://www.youtube.com/watch?v=XzErQ9N4mLQ",
      img: "https://img.youtube.com/vi/XzErQ9N4mLQ/hqdefault.jpg"
    }
  ],
  energetic: [
    {
      title: "Don'u Don'u Don'u",
      video: "https://www.youtube.com/watch?v=A_z5g0_hJN8&pp=0gcJCdgAo7VqN5tD",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKqdA-GaCHBanOdj0HPoGJmJusVUhta03dg&s"
    },
    {
      title: "Chellamma",
      video: "https://www.youtube.com/watch?v=xfs7RGzv8dY",
      img: "https://img.youtube.com/vi/xfs7RGzv8dY/hqdefault.jpg"
    },
    {
      title: "Sodakku",
      video: "https://www.youtube.com/watch?v=7txWfGkCkS4",
      img: "https://img.youtube.com/vi/7txWfGkCkS4/hqdefault.jpg"
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

