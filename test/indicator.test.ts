import indicator from '../src';

jest.unmock('../src/utils');
const utils = require('../src/utils');

utils.throttle = jest.fn(callback => callback());
utils.handleProgressUpdate = jest.fn();

function getProgressBar() {
  return document.getElementById('ts-indicator');
}

describe('indicator', () => {
  afterEach(() => {
    getProgressBar()?.remove();
  });

  function verifyProgress(height?: string, color?: string) {
    const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);

    indicator({ element: '#content', height, color });

    const progress = getProgressBar();

    expect(progress).toBeDefined();
    expect(progress?.style.borderTop).toEqual(
      `${height ?? '1vh'} solid ${color ?? '#0000ff'}`
    );
  }

  function verifyEvents(event: 'scroll' | 'resize') {
    indicator();
    window.dispatchEvent(new CustomEvent(event));

    expect(utils.throttle).toHaveBeenCalledWith(expect.any(Function), 300);
    expect(utils.handleProgressUpdate).toHaveBeenCalled();
  }

  it('should render the progress element with the default style props', () => {
    verifyProgress();
  });

  it('should render the progress element using values for height and color passed by parameter', () => {
    verifyProgress('10px', '#CCC');
  });

  it('should not render the progress element passed by parameter could not be found', () => {
    indicator({ element: '#element' });
    const progress = getProgressBar();

    expect(progress).toBeNull();
  });

  it('should update the progress width when scroll event is triggered', () => {
    verifyEvents('scroll');
  });

  it('should update the progress width when resize event is triggered', () => {
    verifyEvents('resize');
  });
});
