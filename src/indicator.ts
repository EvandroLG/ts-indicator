import { createDiv, getElement, throttle } from './utils';

type IndicatorType = {
  element?: string | HTMLElement;
  color?: string;
};

const indicator = ({ element, color }: IndicatorType = {}) => {
  const progress = createDiv(`
    position: sticky;
    top: 0;
    left: 0;
    border-top: 1vh solid ${color ?? 'blue'};
    transition: width 0.4s ease-out;
    width: 0%;
  `);

  document.body.prepend(progress);

  const domElement = getElement(element ?? document.body);

  if (!domElement) {
    return;
  }

  const onScroll = throttle(() => {
    const max = domElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(window.pageYOffset / max) * 100}%`;
  }, 300);

  window.addEventListener('scroll', onScroll);
};

export default indicator;
