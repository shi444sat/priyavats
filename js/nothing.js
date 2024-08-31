document.addEventListener("DOMContentLoaded", () => {
  // Get the current URL's query parameters
  const urlParams = new URLSearchParams(window.location.search);
  
  // Check if there is at least one query parameter
  if (urlParams.toString()) {
    // Get the first query parameter name
    const firstParam = urlParams.keys().next().value;

    // If a parameter exists, redirect to the new URL with that parameter value + '01'
    if (firstParam) {
      const newUrl = `https://priyavats.onrender.com/?room=${firstParam}01`;
      window.location.href = newUrl;
    }
  }
});
