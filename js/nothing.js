document.addEventListener("DOMContentLoaded", () => {
    // Check if the current URL contains the query parameter "text"
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("text")) {
      // Construct the new URL with the same query parameters
      const newUrl = `chat?room=${urlParams.toString()}`;
      // Redirect to the new URL
      window.location.href = newUrl;
    }
  });