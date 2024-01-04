function triggerlink() {
    window.open("upi://pay?pa=mohitlab@fam&pn=Mohit%20Singh&cu=INR");
}

function openProjects() {
    window.open("https://peakwatch.vercel.app", "_blank");
  }

// JavaScript for the typing effect
const text = "Creating web a safer place for everyone  🫶🏼";
let index = 0;
      const speed = 50; // Adjust the speed of typing here
      const pauseDuration = 1000; // 1 second pause duration

      function type() {
        const bioDiv = document.getElementById("bio-id");
        if (index < text.length) {
          bioDiv.innerHTML += text.charAt(index);
          index++;
          // Resize the div dynamically based on the content
          bioDiv.style.height = bioDiv.scrollHeight + "px";
          setTimeout(type, speed);
        } else {
          // Pause for 1 second after completing the sentence
          setTimeout(reset, pauseDuration);
        }
      }

      function reset() {
        // Clear the content and reset the index
        document.getElementById("bio-id").innerHTML = "";
        index = 0;
        // Reset the div height to its original state
        document.getElementById("bio-id").style.height = "auto";
        // Start typing again after the pause
        setTimeout(type, 0);
      }

      // Call the type function after a delay (you can adjust the delay if needed)
      setTimeout(type, 1000);