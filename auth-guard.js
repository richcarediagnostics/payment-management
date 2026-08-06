import { db, auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export function requireRole(allowedRoles){
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if(!user){ location.href = "index.html"; return; }
      try{
        const roleSnap = await getDoc(doc(db, "users", user.uid));
        if(!roleSnap.exists()){
          await signOut(auth);
          location.href = "index.html";
          return;
        }
        const role = roleSnap.data().role;
        if(!allowedRoles.includes(role)){
          if(role === "recorder") location.href = "recorder.html";
          else if(role === "admin" || role === "superadmin") location.href = "admin.html";
          else location.href = "index.html";
          return;
        }
        resolve({user, role, email: user.email, displayName: roleSnap.data().displayName || user.email});
      }catch(e){
        console.error(e);
        location.href = "index.html";
      }
    });
  });
}

export async function logout(){
  await signOut(auth);
  location.href = "index.html";
}
