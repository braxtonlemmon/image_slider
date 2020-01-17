import { renderImage } from './renderImage.js';
import { eventController } from './eventController.js';
import { renderSlider } from './renderSlider.js';
import { renderDots } from './renderDots.js';

renderImage.makeImage(0);
renderSlider.makeImages(0);
renderDots.render();
eventController.listen();

// setInterval(function() { 
//   renderImage.swapImage('right')
//   renderDots.render(); 
// }, 5000);






