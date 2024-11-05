export function renderSongs(songs) {
    const songsContainer = document.getElementById('songs-container');
    songsContainer.innerHTML = ''; // Rydder containeren

    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song-item'); // Klasse til styling
        songElement.innerHTML = `
            <h3>${song.title} - ${song.artists.name}</h3>
        `;
        songsContainer.appendChild(songElement);
    });
}
