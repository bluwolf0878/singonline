// assets/js/controller.js
import { getSongs, getCarDetails } from './model.js';
import { renderSongList, renderSongDetail } from './view.js';

export async function loadSongs() {
    const songs = await getSongs();
    renderSongList(songs);
}

export async function loadCarDetail(carId) {
    const car = await getCarDetails(carId);
    renderCarDetail(car);
}
