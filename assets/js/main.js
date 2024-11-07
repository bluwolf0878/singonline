import { displayRandomSongs, searchSongs, searchArtists, loginUser } from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.includes("index.html")) {
        displayRandomSongs();
    } else if (path.includes("songs.html")) {
        document.getElementById('search-button').addEventListener('click', searchSongs);
    } else if (path.includes("artists.html")) {
        document.getElementById('search-artist-button').addEventListener('click', searchArtists);
    } else if (path.includes("login.html")) {
        document.getElementById('login-button').addEventListener('click', loginUser);
    }
});
