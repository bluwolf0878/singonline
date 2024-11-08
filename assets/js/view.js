export function renderSongs(songs) {
    const container = document.getElementById('songs-container');
    container.innerHTML = '';
    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.innerHTML = `<h3>${song.title}</h3>`;
        container.appendChild(songElement);
    });
}

export function rendertext(data) {
    const content = document.getElementById('content')
    content.innerHTML = '';
    console.log(data);
    
    if(data){
        data.forEach( item => {
            
            const itemelement = document.createElement('div');
            itemelement.innerHTML = `<h2>${item.header}</h2>
            <p>${item.content}</p>
            <div>${item.surjestion}</div>`;
            content.appendChild(itemelement)
        });

    }
    
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
        artistElement.innerHTML = `<h3>${artist.name}</h3>
        <p>${artist.description}</p> <img src="${artist.image}" alt="">`;
        list.appendChild(artistElement);
    });
}

export function showLoginSuccess() {
    alert("Login successful!");
}
