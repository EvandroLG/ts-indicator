import { getElement, throttle } from './utils';

type PropType = {
  element?: string | HTMLElement;
  color?: string;
};

const progress = ({ element = document.body, color = 'blue' }: PropType) => {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 2px solid ${color};
  `;

  document.body.appendChild(bar);

  const _element = getElement(element) as HTMLElement;
  const onScroll = throttle(() => {
    const max = _element.scrollHeight - window.innerHeight;
    bar.style.width = `${(window.pageYOffset / max) * 100}%`;
  }, 300);

  window.addEventListener('scroll', onScroll);
};

export default progress;
