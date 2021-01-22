import { createDiv, getElement, throttle } from './utils';

type IndicatorType = {
  element?: string | HTMLElement;
  color?: string;
  height?: string;
};

const indicator = ({ element, color, height }: IndicatorType = {}) => {
  const progress = createDiv(`
    position: fixed;
    top: 0;
    left: 0;
    border-top: ${height ?? '1vh'} solid ${color ?? 'blue'};
    transition: width 0.4s ease-out;
    width: 0%;
  `);

  document.body.prepend(progress);

  const domElement = getElement(element ?? document.body);

  if (!domElement) {
    return;
  }

  const onScroll = throttle(() => {
    const { scrollHeight } = domElement;
    const offsetTop =
      domElement instanceof HTMLElement ? domElement.offsetTop : 0;
    const max = scrollHeight + offsetTop - window.innerHeight;

    progress.style.width = `${(window.pageYOffset / max) * 100}%`;
  }, 300);

  window.addEventListener('scroll', onScroll);
};

export default indicator;
