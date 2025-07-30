const songs = {
  calm: [
    { title: "Anbe Sivam - Unnai Kaanadhu Naan", lyrics: `உன்னை காணாது நான் உயிர் வாழ்வேன்...` },
    { title: "Vaarayo Vennilave", lyrics: `வாராயோ வெண்ணிலாவே வாராயோ...` },
    { title: "Munbe Vaa", lyrics: `முன்பே வா என் அன்பே வா...` }
  ],
  love: [
    { title: "Kaadhal Rojave", lyrics: `காதல் ரோஜாவே என் காதல் ரோஜாவே...` },
    { title: "Enna Solla Pogirai", lyrics: `என்ன சொல்ல போகிறாய்...` },
    { title: "Pudhu Metro Rail", lyrics: `உன் சிரிப்பை பாதியில் நிறுத்திவிட்டு...` }
  ],
  motivational: [
    { title: "Vetri Kodi Kattu", lyrics: `வெற்றி கொடி கட்டு வழியடி போடு...` },
    { title: "Unnakenna Venum Sollu", lyrics: `உனக்கென்ன வேண்டும் சொல்லு...` },
    { title: "Thamizhan Anthem", lyrics: `நான் தமிழன் நான் அடங்க மாட்டேன்...` }
  ],
  party: [
    { title: "Why This Kolaveri Di", lyrics: `Why this kolaveri kolaveri kolaveri di...` },
    { title: "Aaluma Doluma", lyrics: `ஆளுமா டொளுமா தூள் கெழி மாசு...` },
    { title: "Vaathi Coming", lyrics: `Vaathi coming... vaathi coming...` }
  ],
  sad: [
    { title: "Suttrum Vizhi", lyrics: `சுற்றும் விழி சுட்டு கண்கள்...` },
    { title: "Vizhigalil Oru Vaanavil", lyrics: `விழிகளில் ஒரு வானவில்...` },
    { title: "Kannalanae", lyrics: `கண்ணளியே உன்னால்தான்...` }
  ],
  cool: [
    { title: "Style Style Thaan", lyrics: `ஸ்டைல் ஸ்டைல் தான்...` },
    { title: "Naan Ready", lyrics: `நான் ரெடி தான் வா வா...` },
    { title: "Local Boys", lyrics: `லோகல் பாய்ஸ் ரொம்ப சூப்பர் பாய்ஸ்...` }
  ],
  comedy: [
    { title: "Appadi Podu", lyrics: `அப்படிப் போடு போடு...` },
    { title: "Sarakku Vachirukken", lyrics: `சரக்கு வைச்சிருக்கேன்...` },
    { title: "Comedykaran", lyrics: `நீயா நான் யாரு காமெடி காரன்...` }
  ],
  romantic: [
    { title: "Ennodu Nee Irundhaal", lyrics: `என்னோடு நீ இருந்தால்...` },
    { title: "Thaarame Thaarame", lyrics: `தாரமே தாரமே...` },
    { title: "Unakkenna Venum Sollu", lyrics: `உனக்கென்ன வேண்டும் சொல்லு...` }
  ],
  angry: [
    { title: "Kambathu Ponnu", lyrics: `கம்பத்து பொண்ணு...` },
    { title: "Otha Sollala", lyrics: `ஒத்த சொல்லல...` },
    { title: "Veerathe Veerathe", lyrics: `வீரத்தே வீரத்தே...` }
  ],
  peace: [
    { title: "Uyire Uyire", lyrics: `உயிரே உயிரே...` },
    { title: "Anbin Vazhi", lyrics: `அன்பின் வழி நமதே...` },
    { title: "Nee Partha Vizhigal", lyrics: `நீ பார்த்த விழிகள்...` }
  ]
};

function showSongs(mood) {
  const section = document.getElementById("cardSection");
  section.innerHTML = "";

  songs[mood].forEach(song => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = song.title;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-lyrics";
    toggleBtn.textContent = "Show Lyrics";

    const lyrics = document.createElement("div");
    lyrics.className = "lyrics";
    lyrics.textContent = song.lyrics;

    toggleBtn.addEventListener("click", () => {
      const isShown = lyrics.style.display === "block";
      lyrics.style.display = isShown ? "none" : "block";
      toggleBtn.textContent = isShown ? "Show Lyrics" : "Hide Lyrics";
    });

    card.appendChild(title);
    card.appendChild(toggleBtn);
    card.appendChild(lyrics);

    section.appendChild(card);
  });
}


