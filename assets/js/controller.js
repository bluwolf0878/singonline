import { fetchSongs, fetchtext } from './model.js';
import { renderSongs } from './view.js';
import { rendertext } from './view.js';

export async function displaySongs() {
    const songs = await fetchSongs();
    const text = await fetchtext('home')
    renderSongs(songs);
    rendertext(text)
}

// Kald funktionen, når DOM'en er klar
document.addEventListener('DOMContentLoaded', () => {
    displaySongs();
});
