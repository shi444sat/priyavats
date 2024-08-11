      // Your Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyDfIqRZcSTqT7s1w3NNq1yZoQyrcdKOjF8",
        authDomain: "suhani-96c78.firebaseapp.com",
        projectId: "suhani-96c78",
        storageBucket: "suhani-96c78.appspot.com",
        messagingSenderId: "275036106574",
        appId: "1:275036106574:web:c6f769e038aa89795f781f"
      };

      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore(app);