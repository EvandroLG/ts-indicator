type ElementType = string | HTMLElement;

/**
 * Creates a new div with the style passed by parameter
 * @param {string} cssText - string with the styles that will be applied to the element
 * @returns {HTMLElement}
 */
export const createDiv = (cssText: string) => {
  const progress = document.createElement('div');
  progress.id = 'ts-indicator';
  progress.style.cssText = cssText;

  return progress;
};

/**
 * Returns the first element found in the dom tree if the element is a string
 * @param {string | HTMLElement} element
 * @returns {Element | null}
 */
export const getElement = (element: ElementType) => {
  if (typeof element === 'string') {
    return document.querySelector(element);
  }

  return element;
};

/**
 * Creates a throttled function that only invokes `callback` at most once per every `time` milliseconds
 * @param {() => void} callback
 * @param {number} time
 * @returns {() => void}
 */
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
