import indicator from '../../src/index';

const onReady = () => {
  const content = document.getElementById('content');
  content.appendChild(document.createTextNode('Lorem '.repeat(5000)));

  indicator({
    element: content,
    color: 'green',
  });
};

document.addEventListener('DOMContentLoaded', onReady);
