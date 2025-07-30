const moodSongs = {
  calm: [
    {
      title: "பச்சை நிரமே (Pachai Nirame)",
      lyrics: `பச்சை நிரமே பச்சை நிரமே...
சிறகுகள் விரித்து வரவேற்கின்றன...
வானம் இன்று உன்னையும் ஒத்திருக்கிறது...`
    },
    {
      title: "வானம் என்னும் மேகம் (Vaanam Meengum)",
      lyrics: `வானம் என்னும் மேகம்
கனிந்து விழும் நேரம்
மௌனம் பேசும் கீதம்
மெல்ல மெல்ல தேனம்`
    },
    {
      title: "அந்த நாள் ஞாபகம் (Andha Naal Nyabagam)",
      lyrics: `அந்த நாள் ஞாபகம்
மறக்க முடியாத நினைவு
நம் காதல் பரிசுகள்
இருவரும் பகிர்ந்த கனாக்கள்`
    }
  ],
  love: [
    {
      title: "என்னக்கு நீ யாருனு (Enakku Nee Yaarunu)",
      lyrics: `என்னக்கு நீ யாருனு தெரியல
அனா என் மனசுக்குள்ள மட்டும் இடம் கட்டியிருக்க...
நீயும் என் காதலா?`
    },
    {
      title: "மூடா மொட்டா மாயா (Moondram Pirai)",
      lyrics: `மாயா மாயா
என் கனவில் வந்தாய்
மறுபடியும் மறைவாய்
ஆனாலும் மனதில் நிலைநிறுத்தும்...`
    },
    {
      title: "மெல்ல மெல்ல (Mella Mella)",
      lyrics: `மெல்ல மெல்ல என் உயிரில்
உன் பாதங்கள் பதிக்கின்றன
அது நெஞ்சின் ராகமா
இசைமழை கொட்டுதே...`
    }
  ],
  motivational: [
    {
      title: "உயிரே வாழ வேண்டுமா (Uyire Vaazha Venduma)",
      lyrics: `உயிரே வாழ வேண்டுமா
பயமின்றி நீ செல வேண்டும்
வெற்றி உன்னோடு நண்பன்
தன்னம்பிக்கை தான் பயணம்`
    },
    {
      title: "வேற லெவல் (Vera Level)",
      lyrics: `நாம் வேற லெவல் தான்
யாரும் நம்ம மேல இல்ல
நம்ம hard work தான் விகடமா வாழுது`
    },
    {
      title: "தானாக வராது வெற்றி (Victory Won’t Come Easy)",
      lyrics: `தானாக வராது வெற்றி
துடிப்பும் முயற்சியும் வேண்டும்
ஒவ்வொரு தடையும் பாடம்
சுழற்சி தொடரும் வாழ்க்கை`
    }
  ],
  party: [
    {
      title: "ஆலுமா டோலுமா (Aaluma Doluma)",
      lyrics: `ஆலுமா டோலுமா வெடிக்குது பாடலு
அடிச்சிடு தாளத்துல கூத்தாடுது காலு`
    },
    {
      title: "சோடா சோடா (Soda Bottle)",
      lyrics: `சோடா பாட்டில் தாளத்துல
சண்டைய போடா வாத்தியத்துல`
    },
    {
      title: "மாசு மாசு (Massu Massu)",
      lyrics: `மாசு மாசு சாமி கும்முடி
பாட்டில் உதைச்சா பாட்டி குதிக்குறா`
    }
  ]
};

function showSongs(mood) {
  const container = document.getElementById("cardSection");
  container.innerHTML = "";

  moodSongs[mood].forEach((song, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    typeWriter(title, song.title, 0);

    const lyrics = document.createElement("div");
    lyrics.className = "lyrics-box";
    lyrics.innerText = song.lyrics;
    lyrics.id = `lyrics-${mood}-${index}`;

    const toggle = document.createElement("button");
    toggle.className = "toggle-btn";
    toggle.innerText = "📜 Show Lyrics";
    toggle.onclick = () => {
      const isVisible = lyrics.style.display === "block";
      lyrics.style.display = isVisible ? "none" : "block";
      toggle.innerText = isVisible ? "📜 Show Lyrics" : "❌ Hide Lyrics";
    };

    card.appendChild(title);
    card.appendChild(toggle);
    card.appendChild(lyrics);
    container.appendChild(card);
  });
}

function typeWriter(element, text, i) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1), 50);
  }
}
