import { Snoweb } from '../index';

/* This file is used for development purpose and won't be included in the build */
const snow = new Snoweb();

const toggle: HTMLButtonElement | null = document.querySelector('#toggle');
toggle?.addEventListener('click', () => {
  snow.isStarted() ? snow.stop() : snow.start();
  toggle.innerText = snow.isStarted() ? 'Stop snowfall!' : 'Start snowfall!';
})

const destroy: HTMLButtonElement | null = document.querySelector('#destroy');
destroy?.addEventListener('click', () => {
  snow.destroy();
  snow.stop();
})
