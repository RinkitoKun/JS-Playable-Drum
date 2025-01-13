function playSound(e) {
    let keyCode;
    
    // Check if e is an event object or a manual keyCode
    if (typeof e === 'object') {
      keyCode = e.keyCode;
    } else {
      keyCode = e; // For manual keyCode passed via onclick
    }
  
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  
    if (!audio) return; // Stop the function if no audio element is found
    audio.currentTime = 0; // Rewind the audio to the start
    audio.play();
  
    if (!key) return; // Stop the function if no key element is found
    key.classList.add("key_press");
  
    // Remove 'key_press' class after 200 milliseconds
    setTimeout(() => {
      key.classList.remove("key_press");
    }, 200);
  }
  
  window.addEventListener("keydown", playSound);
  