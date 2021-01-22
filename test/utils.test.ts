import { getElement, createDiv } from '../src/utils';

describe('getElement', () => {
  it('should return the same element passed by parameter', () => {
    const div = document.createElement('div');
    const result = getElement(div);

    expect(result?.isEqualNode(div)).toBeTruthy();
  });

  it('should return dom element based on the query passed by parameter', () => {
    const result = getElement('body');
    expect(result?.isEqualNode(document.body)).toBeTruthy();
  });

  it('should return null when element was not found', () => {
    const result = getElement('#my-fake-element');
    expect(result).toBeNull();
  });
});

describe('createDiv', () => {
  it('should return a div element with the style passed by parameter', () => {
    const cssText = ['position: fixed;', 'top: 0px;', 'left: 0px;'].join(' ');

    const result = createDiv(cssText);

    expect(result?.style.cssText).toBe(cssText.trim());
    expect(result?.id).toBe('ts-indicator');
  });
});
