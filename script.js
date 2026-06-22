const songs = {
  bollywood: {
    happy: [
      {
        name: "Badtameez Dil",
        link: "https://youtu.be/II2EO3Nw4m0?si=l7jqoGn68PRPcDWy",
      },
      {
        name: "Gallan Goodiyaan",
        link: "#",
      },
      {
        name: "Kar Gayi Chull",
        link: "#",
      },
    ],
    sad: [
      {
        name: "Channa Mereya",
        link: "#",
      },
      {
        name: "Agar Tum Saath Ho",
        link: "#",
      },
      {
        name: "Phir Le Aaya Dil",
        link: "#",
      },
    ],
    romantic: [
      {
        name: "Tum Hi Ho",
        link: "#",
      },
      {
        name: "Raabta",
        link: "#",
      },
      {
        name: "Kesariya",
        link: "#",
      },
    ],
    motivated: [
      {
        name: "Zinda",
        link: "#",
      },
      {
        name: "Kar Har Maidaan Fateh",
        link: "#",
      },
      {
        name: "Lakshya",
        link: "#",
      },
    ],
  },

  hollywood: {
    happy: [
      {
        name: "Happy - Pharrell Williams",
        link: "#",
      },
      {
        name: "Can't Stop The Feeling",
        link: "#",
      },
      {
        name: "Shake It Off",
        link: "#",
      },
    ],
    sad: [
      {
        name: "Someone Like You",
        link: "#",
      },
      {
        name: "Let Her Go",
        link: "#",
      },
      {
        name: "All I Want",
        link: "#",
      },
    ],
    romantic: [
      {
        name: "Perfect",
        link: "#",
      },
      {
        name: "All Of Me",
        link: "#",
      },
      {
        name: "Love Yourself",
        link: "#",
      },
    ],
    motivated: [
      {
        name: "Believer",
        link: "#",
      },
      {
        name: "Eye Of The Tiger",
        link: "#",
      },
      {
        name: "Hall Of Fame",
        link: "#",
      },
    ],
  },

  tollywood: {
    happy: [
      {
        name: "Butta Bomma",
        link: "#",
      },
      {
        name: "Ramuloo Ramulaa",
        link: "#",
      },
      {
        name: "Oo Antava",
        link: "#",
      },
    ],
    sad: [
      {
        name: "Samajavaragamana",
        link: "#",
      },
      {
        name: "Inthandham",
        link: "#",
      },
      {
        name: "Priyathama",
        link: "#",
      },
    ],
    romantic: [
      {
        name: "Neeli Neeli Aakasam",
        link: "#",
      },
      {
        name: "Inthandham",
        link: "#",
      },
      {
        name: "Samajavaragamana",
        link: "#",
      },
    ],
    motivated: [
      {
        name: "Saahore Baahubali",
        link: "#",
      },
      {
        name: "Jai Jai Mahishasura Mardini",
        link: "#",
      },
      {
        name: "Dosti",
        link: "#",
      },
    ],
  },
};

function recommendSongs() {
  const mood = document.getElementById("mood").value;

  const selectedIndustries = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked'),
  ).map((cb) => cb.value);

  let output = "<h3>Recommended Songs 🎧</h3>";

  if (selectedIndustries.length === 0) {
    output += "<p>Please select at least one industry.</p>";
  } else {
    selectedIndustries.forEach((industry) => {
      output += `<h4>${industry.toUpperCase()}</h4>`;

      songs[industry][mood].forEach((song) => {
        output += `
                    <a href="${song.link}" target="_blank" class="song-link">
                       <div class="song">${song.name}</div>
                    </a>
                `;
      });
    });
  }

  document.getElementById("result").innerHTML = output;
}
