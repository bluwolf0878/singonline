import { fetchRandomSongs, fetchSongs, fetchArtists, authenticateUser, fetchtext } from './model.js';
import { renderSongs, renderSongList, renderArtistList, showLoginSuccess, rendertext } from './view.js';

export async function displayRandomSongs() {
    const songs = await fetchRandomSongs();
    renderSongs(songs);
}

export async function displaycontent(id) {
    const data = await fetchtext(id)
    // console.log(data);
    rendertext(data)
}

export async function searchSongs() {
    const title = document.getElementById('search-song').value;
    const songs = await fetchSongs();
    renderSongList(songs);
}

export async function searchArtists() {
    const name = document.getElementById('search-artist').value;
    const artists = await fetchArtists(name, description, image);
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
