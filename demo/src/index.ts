import indicator from '../../src/index';

const onReady = () => {
  document.body.appendChild(document.createTextNode('Lorem '.repeat(5000)));

  indicator();
};

document.addEventListener('DOMContentLoaded', onReady);
