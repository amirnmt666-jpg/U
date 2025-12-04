function extractVideoId(url) {
    // قبول لینک‌های:
    // https://www.youtube.com/watch?v=VIDEOID
    // https://youtu.be/VIDEOID
    // https://www.youtube.com/shorts/VIDEOID
    const regex = /(?:youtube\.com\/.*v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function loadVideo() {
    const url = document.getElementById("urlInput").value.trim();
    const videoId = extractVideoId(url);

    if (!videoId) {
        alert("لینک یوتیوب معتبر نیست یا قابل پخش نمی‌باشد.");
        return;
    }

    document.getElementById("player").innerHTML = `
        <iframe width="100%" height="250"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
}