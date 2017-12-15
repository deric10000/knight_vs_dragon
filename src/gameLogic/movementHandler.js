import React from 'react';

export const movementHandler = () => {
  const movementChecker = (event) => {
    const key = event.keyCode
    console.log("SOME SHIT")
    if (key.value === 37) {
      console.log("KEY: ", key);
      this.setState({
        knightPos: this.knightPos -= 1
      })
    } else if (key === 38) {
      console.log("KEY: ", key);
      this.setState({
        knightPos: this.knightPos -= 4
      })
    } else if (key === 39) {
      console.log("KEY: ", key);
      this.setState({
        knightPos: this.knightPos += 1
      })
    } else if (key ===40) {
      console.log("KEY: ", key);
      this.setState({
        knightPos: this.knightPos += 4
      })
    } else {
      console.log("Somethings not working")
      return null
    }
  }
  document.addEventListener('keydown', movementChecker)
}
