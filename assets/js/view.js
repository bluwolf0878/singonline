export function renderSongs(songs) {
    const songsContainer = document.getElementById('songs-container');
    songsContainer.innerHTML = ''; // Rydder containeren

    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song-item'); // Klasse til styling
        songElement.setAttribute('style',`background-image: url(${song.image})`)
        songElement.innerHTML = `
            <h3>${song.title} - ${song.artists.name}</h3>
            <p>${song.description}</p>
        `;
        songsContainer.appendChild(songElement);
    });
}
