import { getElement, throttle } from './utils';

type PropType = {
  element?: string | HTMLElement;
  color?: string;
};

const indicator = ({ element, color }: PropType = {}) => {
  const progress = document.createElement('div');
  progress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 2px solid ${color ?? 'blue'};
  `;

  document.body.appendChild(progress);

  const _element = getElement(element ?? document.body) as HTMLElement;
  const onScroll = throttle(() => {
    const max = _element.scrollHeight - window.innerHeight;
    progress.style.width = `${(window.pageYOffset / max) * 100}%`;
  }, 100);

  window.addEventListener('scroll', onScroll);
};

export default indicator;
