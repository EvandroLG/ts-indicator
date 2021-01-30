import { createDiv, getElement, throttle, handleProgressUpdate } from './utils';

type IndicatorType = {
  element?: string | HTMLElement;
  color?: string;
  height?: string;
};

/**
 * A tiny reading position indicator library
 * @param {undefined | string | HTMLElement} element - used to update the progress according with the scroll position
 * @param {string?} color - color of the progressbar element
 * @param {string?} height - height of the progress element
 */
const indicator = ({ element, color, height }: IndicatorType = {}) => {
  const domElement = getElement(element ?? document.body);

  if (!domElement) {
    return;
  }

  const progress = createDiv(`
    position: fixed;
    top: 0;
    left: 0;
    border-top: ${height ?? '1vh'} solid ${color ?? '#0000ff'};
    transition: width 0.4s ease-out;
    width: 0%;
  `);

  document.body.prepend(progress);

  /**
   * Update the progress width when the scroll event is triggered
   */
  const handleScroll = throttle(() => {
    handleProgressUpdate(domElement, progress);
  }, 300);

  /**
   * Update the progress width when the resize event is triggered
   */
  const handleResize = throttle(() => {
    handleProgressUpdate(domElement, progress);
  }, 300);

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
};

export default indicator;
