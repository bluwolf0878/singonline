export function renderSongs(songs) {
    const songsContainer = document.getElementById('songs-container');
    songsContainer.innerHTML = ''; // Rydder containeren
    headline.innerHTML = '<h2>10 tilfældige sange:</h2>'

    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song-item'); // Klasse til styling
        songElement.innerHTML = `
            <h3>${song.title} - ${song.artists.name}</h3>
        `;
        songsContainer.appendChild(songElement);
    });
}
export function rendertext(text) {
    
    const content = document.getElementById('content');
    content.innerHTML = ''; // Rydder containeren

    text.forEach(text => {
        
        const textElement = document.createElement('div')
        textElement.classList.add('text-item')
        textElement.innerHTML = `
        <h2>${text.header}</h2>
        <p>${text.content}</p>
        <p>${text.surjestion}</p>`;
        content.appendChild(textElement);
    });
}
