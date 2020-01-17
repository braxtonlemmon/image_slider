import { images } from './images.js';

const renderImage = (() => {
  const _clearImage = () => {
    const picture = document.querySelector('.picture');
    const image = document.querySelector('.image');
    picture.removeChild(image);
  }

  const makeImage = (index) => {
    const imageBox = document.querySelector('.picture');
    if (imageBox.childElementCount > 2) _clearImage();
    const image = document.createElement('img');
    image.classList.add('image');
    image.dataset.id = images[index].id;
    image.src = images[index].src;
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
    makeImage(newIndex);
  }
  
  const getImageIndex = (id) => {
    const image = images.find((img) => { return img.id === id });
    return images.indexOf(image);
  }
  
  return { 
    makeImage,
    swapImage,
    getImageIndex,
  }
})();

export { renderImage };


