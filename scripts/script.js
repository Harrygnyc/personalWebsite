document.addEventListener('DOMContentLoaded', function() {
    // Your existing JavaScript code here
    // Array of texts to iterate through
    const texts = [
      'Giracochay',
      'Gear-uh-coach-hay',
      'Guiracoche',
      // Add more texts as needed
    ];
    
    let currentIndex = 0;
    const textContainer = document.getElementById('textContainer');
    
    function updateText() {
      textContainer.textContent = texts[currentIndex];
      currentIndex = (currentIndex + 1) % texts.length;

      // Check if it's the last element, then clear the interval
      if (currentIndex === 0) {
        clearInterval(intervalId);
      }
    }
    
    // Initial call to display the first text
    updateText();
    
    // Set interval to update text every 2 seconds
    const intervalId = setInterval(updateText, 2000);
});