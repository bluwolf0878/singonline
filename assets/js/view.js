// assets/js/view.js
export function renderSongList(songs) {
    const app = document.getElementById('app');
    app.innerHTML = '<h2>Song List</h2>';
    const list = document.createElement('ul');
    songs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = `${song.title} by ${song.artist_name}`;
        listItem.addEventListener('click', () => renderSongDetail(song));
        list.appendChild(listItem);
    });
    app.appendChild(list);
}

export function renderSongDetail(song) {
    const app = document.getElementById('app');
    app.innerHTML = `<h2>${song.title}</h2><p>Artist: ${song.artist_name}</p><p>${song.description}</p>`;
}
