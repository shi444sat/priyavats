const PAGE_SIZE = 10;
let lastVisible = null;
const contentRef = db.collection("shayrieng").orderBy("createdAt", "desc");
const contentContainer = document.getElementById("content1");

function loadShayari(isInitialLoad = true) {
  let query = contentRef.limit(PAGE_SIZE);

  if (!isInitialLoad && lastVisible) {
    query = query.startAfter(lastVisible);
  }

  query
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        document.getElementById("load-more-btn").style.display = "none";
        return;
      }

      if (isInitialLoad) {
        contentContainer.innerHTML = ""; // Clear previous content on initial load
      }

      lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const sectionElement = document.createElement("section");
        sectionElement.className = "shayari";
        sectionElement.id = `${data.id}`;
        sectionElement.innerHTML = `
                  <h2>${data.title}</h2>
                  <div class="shayari-content"><p>${data.shayri}</p></div>
                                    <button class="download-btn" onclick="downloadShayari('${data.id}')">Download</button>

                  <button class="download-btn" onclick="downloadShayariOnBackground('${data.id}')">Download on Solid Background</button>
              `;
        contentContainer.appendChild(sectionElement);
      });
    })
    .catch((error) => {
      console.error("Error loading content: ", error);
    });
}

document.getElementById("load-more-btn").addEventListener("click", () => {
  loadShayari(false); // Load more shayari
});

// Initial load
loadShayari();