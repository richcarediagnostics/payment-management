
const firebaseConfig = {
  apiKey: "AIzaSyAW9HnhQ9ie15qHz_Am254ehDdlKbWBTSI",
  authDomain: "richcare-50c80.firebaseapp.com",
  projectId: "richcare-50c80",
  storageBucket: "richcare-50c80.firebasestorage.app",
  messagingSenderId: "1038408232672",
  appId: "1:1038408232672:web:00ec243813cd75bbf86a85"
};
// ============================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export function isConfigPlaceholder(){
  return !firebaseConfig.apiKey || firebaseConfig.apiKey === "YOUR_API_KEY"
      || !firebaseConfig.projectId || firebaseConfig.projectId === "YOUR_PROJECT_ID";
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


let secondaryApp = null;
export function getSecondaryAuth(){
  if(!secondaryApp){
    secondaryApp = initializeApp(firebaseConfig, "Secondary");
  }
  return getAuth(secondaryApp);
}
