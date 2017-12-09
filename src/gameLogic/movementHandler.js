export const movementHandler = () => {
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const arrowRight = () => console.log(keyName);
    const arrowLeft = () => console.log(keyName);
    const arrowDown = () => console.log(keyName);
    const arrowUp = () => console.log(keyName);

    if (keyName === 'ArrowRight') {
      return arrowRight();
    } else if (keyName === 'ArrowLeft') {
      return arrowLeft();
    } else if (keyName === 'ArrowDown') {
      return arrowDown();
    } else if (keyName === 'ArrowUp') {
      return arrowUp();
    } else {
      return null;
    }
  });
}
