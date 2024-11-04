import { fetchSongs } from './model.js';
import { renderSongs } from './view.js';

export async function displaySongs() {
    const songs = await fetchSongs();
    renderSongs(songs);
}

// Kald funktionen, når DOM'en er klar
document.addEventListener('DOMContentLoaded', () => {
    displaySongs();
});
