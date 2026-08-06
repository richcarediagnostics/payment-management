
const firebaseConfig = {
  apiKey: "AIzaSyDAaSxdKGhgLLJsuoYbaeye4rukE31o1p8",
  authDomain: "paymentmanagement-4355e.firebaseapp.com",
  projectId: "paymentmanagement-4355e",
  storageBucket: "paymentmanagement-4355e.firebasestorage.app",
  messagingSenderId: "258310168537",
  appId: "1:258310168537:web:92841de1475fa1f84403c8"
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
