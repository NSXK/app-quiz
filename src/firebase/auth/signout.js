//* Import firebase_app from config.js, signInWithEmailAndPassword, and getAuth from firebase/auth
import {auth} from "../config";

import { signOut as logout } from "firebase/auth";

//* Initialize Firebase
// const auth = getAuth(firebase_app);

//* Sign out (authenticate user)
export default async function signOut() {
  let result = null,
    error = null;
  try {
    //* Sign out current user 
    result = await logout(auth);
  } catch (e) {
    //! Handle errors here
    error = e;
  }

  return { result, error };
}
