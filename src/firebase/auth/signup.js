//Importamos firebase y auth ya inicializado para usar sus métodos y funciones
import { auth } from "../config";

// Métodos y funciones de firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth";

//* Sign up (crear usuario)
export default async function signUp(nickname, name) {
  let result = null, error = null;
  try {
    //* Crear usuario con nickname + @gmail.com y su contraseña será su mismo nickname
    result = await createUserWithEmailAndPassword(auth, nickname + "@gmail.com", nickname);
  } catch (e) {
    //! Manejo de errores aquí
    error = e;
  }

  return { result, error };
}
