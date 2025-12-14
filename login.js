import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQHnjt3XhrOoroYv0Wv3zKB1ekvRFlm2k",
  authDomain: "typocheck-1fb9d.firebaseapp.com",
  projectId: "typocheck-1fb9d",
  storageBucket: "typocheck-1fb9d.appspot.com",
  messagingSenderId: "1061947873411",
  appId: "1:1061947873411:web:8236bcd2946605fae6e3b6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById("loginForm");
const messageBox = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      showMessage("✅ Login Successful! Redirecting...", "success");
      setTimeout(() => {
        window.location.href = "levels.html";
      }, 1500);
    })
    .catch((error) => {
      showMessage("❌ Login Failed: " + error.message, "error");
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
  messageBox.style.fontSize = "20px";
  messageBox.style.lineHeight = "1.6";
  messageBox.style.fontFamily = "'Poppins', sans-serif";
  messageBox.style.fontWeight = "600";
  messageBox.style.color = "#fff";
  messageBox.style.zIndex = "9999";
  messageBox.style.boxShadow = "0 8px 30px rgba(0,0,0,0.25)";
  messageBox.style.letterSpacing = "0.5px";
  messageBox.style.background = "#333";

  // background gradient based on type
  if (type === "success") messageBox.style.background = "linear-gradient(135deg, #4caf50, #45a049)";
  else if (type === "error") messageBox.style.background = "linear-gradient(135deg, #f44336, #e53935)";
  else if (type === "info") messageBox.style.background = "linear-gradient(135deg, #2196f3, #1976d2)";
  else if (type === "warning") messageBox.style.background = "linear-gradient(135deg, #ff9800, #f57c00)";

  // fade-in effect
  messageBox.style.opacity = "1";
  messageBox.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  messageBox.style.transform = "translate(-50%, -50%) scale(1)";

  // auto hide after 2s
  setTimeout(() => {
    messageBox.style.opacity = "0";
    messageBox.style.transform = "translate(-50%, -50%) scale(0.9)";
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 400);
  }, 2000);
}
