import { createDiv, getElement, throttle } from './utils';

type IndicatorType = {
  element?: string | HTMLElement;
  color?: string;
};

const indicator = ({ element, color }: IndicatorType = {}) => {
  const progress = createDiv(`
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 2px solid ${color ?? 'blue'};
  `);

  document.body.appendChild(progress);

  const domElement = getElement(element ?? document.body);

  if (!domElement) {
    return;
  }

  const onScroll = throttle(() => {
    const max = domElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(window.pageYOffset / max) * 100}%`;
  }, 100);

  window.addEventListener('scroll', onScroll);
};

export default indicator;
