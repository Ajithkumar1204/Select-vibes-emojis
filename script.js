const playlistData = {
  Happy: [
    "😊 <a href='https://youtu.be/UTI0X0UeE-A' target='_blank'>Vaathi Coming – Master</a>",
    "🥳 <a href='https://youtu.be/2K2wnJ6SgFY' target='_blank'>So Baby – Doctor</a>"
  ],
  Sad: [
    "😢 <a href='https://youtu.be/pxCzxxjP-TM' target='_blank'>Unna Nenachu – Psycho</a>",
    "💔 <a href='https://youtu.be/V9OfBO7MQxM' target='_blank'>Vennilave Vennilave – Minsara Kanavu</a>"
  ],
  Energetic: [
    "⚡ <a href='https://youtu.be/yvAxVj9TFAw' target='_blank'>Aaluma Doluma – Vedalam</a>",
    "🔥 <a href='https://youtu.be/GN-6lU0oP2w' target='_blank'>Surviva – Vivegam</a>"
  ],
  Relaxed: [
    "😌 <a href='https://youtu.be/jbpV2C8pZ_M' target='_blank'>Pachai Nirame – Alaipayuthey</a>",
    "🌙 <a href='https://youtu.be/BwrZ6f1z3ic' target='_blank'>Nee Partha Vizhigal – 3</a>"
  ],
  Romantic: [
    "❤️ <a href='https://youtu.be/TblG93FZktc' target='_blank'>Kadhal Kan Kattudhe</a>",
    "💘 <a href='https://youtu.be/MNfCnAIEYb4' target='_blank'>Enna Solla – Thangamagan</a>"
  ],
  Cool: [
    "😎 <a href='https://youtu.be/dtRwC8CEo7M' target='_blank'>Naan Pizhaippeno – ENPT</a>",
    "🧊 <a href='https://youtu.be/ZHR86EO7mZ0' target='_blank'>Vinnaithaandi – VTV</a>"
  ],
  Heartbroken: [
    "💔 <a href='https://youtu.be/YxUPCmKYvSk' target='_blank'>Suttrum Vizhi – Ghajini</a>",
    "😭 <a href='https://youtu.be/V1mBNz3rC-E' target='_blank'>Suttrum Vizhi – Kandukondain</a>"
  ],
  Party: [
    "🕺 <a href='https://youtu.be/BE5pl1nH2FQ' target='_blank'>Dippam Dappam – Kaathuvaakula Rendu Kaadhal</a>",
    "🎉 <a href='https://youtu.be/Jv3MJ1N4pVY' target='_blank'>Jimikki Kammal Tamil</a>"
  ],
  Calm: [
    "🧘 <a href='https://youtu.be/9Ke4480MicU' target='_blank'>Azhagiye – Kaatru Veliyidai</a>",
    "🍃 <a href='https://youtu.be/dOT2d6_zN1M' target='_blank'>Munbe Vaa – Sillunu Oru Kaadhal</a>"
  ]
};

document.querySelectorAll("[data-mood]").forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.dataset.mood;
    const section = document.getElementById("playlistSection");
    const list = playlistData[mood]
      .map(song => `<li>${song}</li>`)
      .join("");
    section.innerHTML = `<h3>${mood} Tamil Songs 🎶</h3><ul>${list}</ul>`;
    section.classList.add("active");
    localStorage.setItem("lastMood", mood);
  });
});

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  const lastMood = localStorage.getItem("lastMood");
  if (lastMood && playlistData[lastMood]) {
    const section = document.getElementById("playlistSection");
    const list = playlistData[lastMood]
      .map(song => `<li>${song}</li>`)
      .join("");
    section.innerHTML = `<h3>${lastMood} Tamil Songs 🎶</h3><ul>${list}</ul>`;
    section.classList.add("active");
  }
});
