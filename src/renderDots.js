import { images } from './images.js';
import { renderImage } from './renderImage.js';

const renderDots = (() => {
  const render = () => {
    if (document.querySelector('.frame').childElementCount < 3) _makeDotBox();
    _clearDotBox();
    images.forEach((image) => _makeDot(image));
    _changeCurrentDot();
  }

  // PRIVATE

  const _makeDot = (image) => {
    const dotBox = document.querySelector('.dot-box');
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.dataset.dotId = images.indexOf(image);
    dotBox.appendChild(dot);
  }

  const _makeDotBox = () => {
    const frame = document.querySelector('.frame');
    const dotBox = document.createElement('div');
    dotBox.classList.add('dot-box');
    frame.appendChild(dotBox);
  }

  const _clearDotBox = () => {
    const dotBox = document.querySelector('.dot-box');
    while (dotBox.childElementCount > 0) {
      dotBox.removeChild(dotBox.lastElementChild);
    }
  }

  const _changeCurrentDot = () => {
    const image = document.querySelector('.image');
    const index = renderImage.getImageIndex(parseInt(image.dataset.id));
    const current = document.querySelector(`[data-dot-id= "${index}"]`);
    current.classList.toggle('current-dot');
  }

  return { render };
})();

export { renderDots }