type ElementType = string | HTMLElement;

export const isString = (value: ElementType) => typeof value === 'string';

export const getElement = (element: ElementType) => {
  if (isString(element)) {
    return document.querySelector(element as string);
  }

  return element;
};

export const throttle = (callback: () => any, time: number) => {
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
