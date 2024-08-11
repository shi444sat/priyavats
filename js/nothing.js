document.addEventListener("DOMContentLoaded", () => {
  // Check if the current URL contains the query parameter "text"
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("love")) {
    window.location.href = 'https://priyavats.onrender.com/?room=1205';
  }
});
