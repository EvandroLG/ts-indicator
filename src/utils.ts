type ElementType = string | HTMLElement;

export const isString = (value: ElementType) => typeof value === 'string';

export const getElement = (element: ElementType) => {
  if (isString(element)) {
    return document.querySelector(element as string);
  }

  return element;
};

export const throttle = (callback: () => any, time: number) => {
  let pool: number | null = null;

  return () => {
    if (!pool) {
      setTimeout(() => {
        callback();
        pool = null;
      }, time);
    }
  };
};
