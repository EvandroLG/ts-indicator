type ElementType = string | HTMLElement;

export const createDiv = (cssText: string) => {
  const progress = document.createElement('div');
  progress.id = 'ts-indicator';
  progress.style.cssText = cssText;

  return progress;
};

export const getElement = (element: ElementType) => {
  if (typeof element === 'string') {
    return document.querySelector(element);
  }

  return element;
};

export const throttle = (callback: () => void, time: number) => {
  let pool: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (!pool) {
      pool = setTimeout(() => {
        callback();
        pool = null;
      }, time);
    }
  };
};
