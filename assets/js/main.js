import { displayRandomSongs, searchSongs, searchArtists, loginUser, displaycontent } from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.includes("index.html")) {
        displayRandomSongs();
        displaycontent('home');
    } else if (path.includes("song.html")) {
        document.getElementById('search-button').addEventListener('click', searchSongs);
        displaycontent('songs');
    } else if (path.includes("artists.html")) {
        document.getElementById('search-artist-button').addEventListener('click', searchArtists);
        displaycontent('artists');
    } else if (path.includes("login.html")) {
        document.getElementById('login-button').addEventListener('click', loginUser);
        displaycontent('login');
    }
});
