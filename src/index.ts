const isString = (value: string | HTMLElement) => typeof value === 'string';

const getElement = (element?: string | HTMLElement) => {
  if (!element) {
    return document.body;
  }

  if (isString(element)) {
    return document.querySelector(element as string);
  }

  return element;
};

const ProgressBar = (element?: string | HTMLElement, color?: string) => {
  const progress = document.createElement('div');
  progress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 2px solid ${color ?? 'blue'};
  `;

  document.body.appendChild(progress);

  const _element = getElement(element) as HTMLElement;

  _element?.addEventListener('scroll', () => {
    const max = _element.scrollHeight - window.innerHeight;
    progress.style.width = `${(window.pageYOffset / max) * 100}%`;
  });
};

export default ProgressBar;
