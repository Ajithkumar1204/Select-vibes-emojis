const songs = {
  calm: [
    {
      title: "Pachai Nirame – Alaipayuthey",
      lyrics: `பச்சை நிரமே பச்சை நிரமே
உன்னைக் காணும் போதே
என்னை மறந்தேனே...

காற்றின் இசையே, தேனின் மொழியே
தீண்டும் விழியில் தீண்டாமல் பேசும்...

மழையே கண்களில் நின்று சொல்கிறதே
மறைஞ்சு பேசும் உன்னோட வார்த்தைகள்...`
    },
    {
      title: "Engeyum Eppothum – Ninaithale Inikkum",
      lyrics: `எங்கேயும் எப்போதும் சின்ன சின்ன ஆசைகள்...
எந்தன் மனதுக்குள்ளே வாழும் சின்னவளே...

பூக்கள் பூக்கும் நேரமிது...
பாடும் கிளிகள் கூவுதே...
அவளே என் காதலியே...`
    },
    {
      title: "Vennilave – Minsara Kanavu",
      lyrics: `வெண்ணிலவே வெண்ணிலவே
வந்தை இங்கே என் நிலவே...

கன்னி நிலா காதல் நிலா
கண்ணில் கனவில் என் உயிரே...

மௌன இசை கேட்கும் நேரம்
மழைததும்பும் நேரமிது...`
    }
  ]
  // You can add other moods like happy, sad, etc. similarly
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

    const lyricsDiv = document.createElement("div");
    lyricsDiv.className = "lyrics-box";
    lyricsDiv.innerText = song.lyrics;
    card.appendChild(lyricsDiv);

    container.appendChild(card);
  });
}
