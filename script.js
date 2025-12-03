function extractVideoId(url) {
    const regex = /(?:v=)([^&]+)|(?:be\/)([^?]+)/;
    const match = url.match(regex);
    return match ? (match[1] || match[2]) : null;
}

function loadVideo() {
    const url = document.getElementById("urlInput").value.trim();
    const videoId = extractVideoId(url);

    if (!videoId) {
        alert("لینک معتبر نیست");
        return;
    }

    document.getElementById("player").innerHTML = `
        <iframe width="100%" height="250"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0" allowfullscreen></iframe>
    `;
}