import { fetchRandomSongs, fetchSongsByTitle, fetchArtistsByName, authenticateUser } from './model.js';
import { renderSongs, renderSongList, renderArtistList, showLoginSuccess } from './view.js';

export async function displayRandomSongs() {
    const songs = await fetchRandomSongs();
    renderSongs(songs);
}

export async function searchSongs() {
    const title = document.getElementById('search-song').value;
    const songs = await fetchSongsByTitle(title);
    renderSongList(songs);
}

export async function searchArtists() {
    const name = document.getElementById('search-artist').value;
    const artists = await fetchArtistsByName(name);
    renderArtistList(artists);
}

export async function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const success = await authenticateUser(username, password);
    if (success) {
        showLoginSuccess();
    } else {
        alert("Login failed!");
    }
}
