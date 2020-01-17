import { renderImage } from './renderImage.js';
import { renderSlider } from './renderSlider.js';
import { renderDots } from './renderDots.js';

const eventController = (() => {
  const listen = () => {
    window.addEventListener('click', (e) => {
      const classList = e.target.classList;
      switch (true) {
        case classList.contains('image-left'):
          {
            renderImage.swapImage('left');
            renderDots.render();
          }
          break;
        case classList.contains('image-right'):
          {
            renderImage.swapImage('right');
            renderDots.render();
          }
          break;
        case classList.contains('slides-left'):
          {
            renderSlider.swapImages('left');
          }
          break;
        case classList.contains('slides-right'):
          {
            renderSlider.swapImages('right');
          }
          break;
        case classList.contains('slider-image'):
          {
          const id = parseInt(e.target.attributes[1].value);
          console.log(id);
          const index = renderImage.getImageIndex(id);
          renderImage.changeImageDOM(index);
          renderDots.render();
          }
          break;
        case classList.contains('dot'):
          {
          const index = parseInt(e.target.attributes[1].value);
          renderImage.changeImageDOM(index);
          renderDots.render();
          }
          break;
      }
    });
  }

  return { listen };
})();

export { eventController };