import { images } from './images.js';
import { renderImage } from './renderImage.js';

const renderSlider = (() => {
  const swapImages = (direction) => {
    const imageLeft = document.querySelector('.slider-left');
    const imageRight = document.querySelector('.slider-right');
    const lastIndex = images.length - 1;
    let newIndex;
    if (direction === 'left') {
      let index = renderImage.getImageIndex(parseInt(imageLeft.dataset.id));
      newIndex = (index === 0 ? 0 : index - 1);
    } else if (direction === 'right') {
      let index = renderImage.getImageIndex(parseInt(imageRight.dataset.id));
      newIndex = (index === lastIndex ? lastIndex - 2 : index - 1);
    }
    makeImages(newIndex);
  }

  const makeImages = (index) => {
    _clearImageBox();
    const slider = document.querySelector('.slides');
    const imageBox = document.querySelector('.image-box');
    const position = {
      0: 'left',
      1: 'mid',
      2: 'right',
    }
    for (let i = 0; i < 3; i++) {
      const image = document.createElement('img');
      image.classList.add('slider-image');
      image.classList.add(`slider-${position[i]}`);
      image.dataset.id = images[index + i].id;
      image.src = images[index + i].src;
      imageBox.appendChild(image);
    }
    slider.appendChild(imageBox);
  }

  // PRIVATE

  const _clearImageBox = () => {
    const imageBox = document.querySelector('.image-box');
    while (imageBox.childElementCount > 0) {
      imageBox.removeChild(imageBox.lastElementChild);
    }
  }

  return { 
    makeImages,
    swapImages,
   }
})();

export { renderSlider };