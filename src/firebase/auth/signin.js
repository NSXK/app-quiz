//Importamos firebase y auth ya inicializado para usar sus métodos y funciones
import { auth } from "../config";

// Métodos y funciones de firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";

//* Sign in (autenticar un usuario)
export default async function signIn(nickname) {
  let result = null, error = null;
  try {
    //* Iniciar sesión con nickname + @gmail.com y su contraseña será su mismo nickname
    result = await signInWithEmailAndPassword(auth, nickname + "@gmail.com", nickname);
  } catch (e) {
    //! Manejo de errores aquí
    error = e;
  }

  return { result, error };
}
