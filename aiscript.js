const API_KEY = "AIzaSyDM9nxMBOEAgEDxJ1wkXIlCHbGUvkTcWfM";

function playVideo(videoId) {
  document.getElementById("player-container").innerHTML = `
        <iframe
            width="500%"
            height="500"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            title="YouTube player"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
    `;
}

async function recommendSongs() {
  const mood = document.getElementById("mood").value;
  const emotion = document.getElementById("emotion").value;

  const selectedIndustries = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked'),
  ).map((cb) => cb.value);

  if (selectedIndustries.length === 0) {
    document.getElementById("result").innerHTML =
      "<p>Select at least one industry.</p>";
    return;
  }

  let output = "<h3>Recommended Songs 🎵</h3>";

  for (const industry of selectedIndustries) {
    const query = `${mood} ${emotion} ${industry} famous song`;

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&videoCategoryId=10&maxResults=50&q=${encodeURIComponent(query)}&key=${API_KEY}`,
    );

    const data = await response.json();

    output += `<h4>${industry.toUpperCase()}</h4>`;

    data.items.forEach((video) => {
      if (!video.id || !video.id.videoId) {
        return;
      }
      const title = video.snippet.title;
      const thumbnail = video.snippet.thumbnails.medium.url;
      const videoId = video.id.videoId;

      output += `
                <div class="song-card"
                     onclick="playVideo('${videoId}')">

                    <img src="${thumbnail}"
                         class="thumbnail">

                    <div class="song-title">
                        ${title}
                    </div>

                </div>
            `;
    });
  }

  document.getElementById("result").innerHTML = output;
}
