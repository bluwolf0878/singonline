export function renderSongs(songs) {
    const container = document.getElementById('songs-container');
    container.innerHTML = '';
    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.innerHTML = `<h3>${song.title}</h3>`;
        container.appendChild(songElement);
    });
}

export function renderSongList(songs) {
    const list = document.getElementById('songs-list');
    list.innerHTML = '';
    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.innerHTML = `<h3>${song.title}</h3>`;
        list.appendChild(songElement);
    });
}

export function renderArtistList(artists) {
    const list = document.getElementById('artists-list');
    list.innerHTML = '';
    artists.forEach(artist => {
        const artistElement = document.createElement('div');
        artistElement.innerHTML = `<h3>${artist.name}</h3>`;
        list.appendChild(artistElement);
    });
}

export function showLoginSuccess() {
    alert("Login successful!");
}
