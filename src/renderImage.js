import { images } from './images.js';

const renderImage = (() => {
  const makeImage = function makeImageFunction() {
    const imageBox = document.querySelector('.picture');
    const image = document.createElement('img');
    image.classList.add('image');
    image.dataset.id = images[0].id;
    image.src = images[0].src;
    imageBox.appendChild(image);
  }

  const swapImage = (direction) => {
    const image = document.querySelector('.image');
    const lastIndex = images.length - 1;
    let index = getImageIndex(parseInt(image.dataset.id));
    let newIndex;
    if (direction === 'left') {
      newIndex = (index === 0 ? lastIndex : index - 1);
    } else if (direction === 'right') {
      newIndex = (index === lastIndex ? 0 : index + 1);
    }
    changeImageDOM(newIndex);
  }
  
  const getImageIndex = (id) => {
    const image = images.find((img) => { return img.id === id });
    return images.indexOf(image);
  }
  
  const changeImageDOM = (index) => {
    const imageDOM = document.querySelector('.image');
    const imageDB = images[index];
    imageDOM.src = imageDB.src;
    imageDOM.alt = imageDB.alt;
    imageDOM.dataset.id = imageDB.id;
  }

  return { 
    makeImage,
    swapImage,
    getImageIndex,
    changeImageDOM 
  }
})();

export { renderImage };


