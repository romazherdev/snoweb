export * from './lib/snoweb';
export * from './models/snoweb-config';

const style = document.createElement('style');
style.innerHTML = `
.snoweb-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.snoweb-container > * {
  position: absolute;
}
`;
document.body.appendChild(style);
