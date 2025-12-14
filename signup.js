// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDQHnjt3XhrOoroYv0Wv3zKB1ekvRFlm2k",
  authDomain: "typocheck-1fb9d.firebaseapp.com",
  projectId: "typocheck-1fb9d",
  storageBucket: "typocheck-1fb9d.appspot.com",  // ✅ FIXED
  messagingSenderId: "1061947873411",
  appId: "1:1061947873411:web:8236bcd2946605fae6e3b6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupForm = document.getElementById("signupForm");
const messageBox = document.getElementById("message");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  // Firebase signup
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      showMessage("Signup Successful ✅ Redirecting to login...", "success");
      signupForm.reset(); // clear form
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    })
    .catch((error) => {
      showMessage("Signup Failed ❌ " + error.message, "error");
    });
});

function showMessage(msg, type) {
  const messageBox = document.getElementById("message");

  messageBox.textContent = msg;
  messageBox.className = type; 
  messageBox.style.display = "block";
  messageBox.style.position = "fixed";
  messageBox.style.top = "50%";
  messageBox.style.left = "50%";
  messageBox.style.transform = "translate(-50%, -50%)";
  messageBox.style.minWidth = "350px";
  messageBox.style.maxWidth = "80%";
  messageBox.style.textAlign = "center";
  messageBox.style.padding = "25px 30px";
  messageBox.style.borderRadius = "16px";
  messageBox.style.fontSize = "20px";       // larger font
  messageBox.style.lineHeight = "1.6";      // more readable
  messageBox.style.fontFamily = "'Poppins', sans-serif"; // softer font
  messageBox.style.fontWeight = "600";
  messageBox.style.color = "#fff";
  messageBox.style.zIndex = "9999";
  messageBox.style.boxShadow = "0 8px 30px rgba(0,0,0,0.25)";
  messageBox.style.background = "#333";
  messageBox.style.letterSpacing = "0.5px";

  // background color based on type
  if (type === "success") messageBox.style.background = "linear-gradient(135deg, #4caf50, #45a049)";
  else if (type === "error") messageBox.style.background = "linear-gradient(135deg, #f44336, #e53935)";
  else if (type === "info") messageBox.style.background = "linear-gradient(135deg, #2196f3, #1976d2)";
  else if (type === "warning") messageBox.style.background = "linear-gradient(135deg, #ff9800, #f57c00)";

  // smooth fade-in
  messageBox.style.opacity = "1";
  messageBox.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  messageBox.style.transform = "translate(-50%, -50%) scale(1)";

  // auto-hide after 3s
  setTimeout(() => {
    messageBox.style.opacity = "0";
    messageBox.style.transform = "translate(-50%, -50%) scale(0.9)";
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 400);
  }, 2000);
}


