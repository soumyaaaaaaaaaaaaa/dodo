const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  // small pop animation
  startBtn.classList.add("clicked");

  // wait a bit so animation shows, then go to next page
  setTimeout(() => {
    window.location.href = "page2.html"; // change to your next page file
  }, 300);
});



