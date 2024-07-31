"use client";

import { useEffect, useState } from 'react';

// Llamado a nuestro contexto que maneja el estado de nuestro inicio de sesión
import { useAuthContext } from "@/context/AuthContext";

import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';

// Libreria de formulario (formik) & validación (yup)
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Libreria que nos mostrara toast (notificaciones en pantalla)
import { toast } from "react-hot-toast";

// Llamado a clases de inicio de sesión y registro
import signIn from '@/firebase/auth/signin';
import signUp from '@/firebase/auth/signup';

// Manejo de rutas: nos sirve para poder movilizarnos dentro de nuestro sitio web
import { useRouter } from "next/navigation";

export default function Page() {
  // Esto no crea una variable como tal sino que extrae de nuestro useAuthContext el "user"
  const { user } = useAuthContext();
  //* Crea una variable de router
  const router = useRouter();
  const [method, setMethod] = useState('signup');

  // error en el login: . This may be caused by an accidental early return statement.
  // useEffect(() => {
  //   //* Si el usuario está conectado, redirigir a la página de inicio dashboard
  //   if (user != null && user !== undefined) {
  //     router.push("/dashboard");
  //   }
  // }, [user, router]);

  // // No mostrar nada ya que el usuario sera redirigido
  // if (user) return null;

  const formik_signup = useFormik({
    initialValues: {
      nickname: '',
      name: '',
      submit: null
    },
    validationSchema: Yup.object({
      nickname: Yup
        .string()
        .max(255)
        .matches(/^[a-zA-Z0-9_]+$/, 'El nombre de usuario solo puede contener letras y espacios')
        .required('Tu nickname es requerido'),
      name: Yup
        .string()
        .max(255)
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚÑñ\s]+$/, 'Ingresa un nombre válido')
        .required('Tu nombre es requerido'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const { result, error } = await signUp(values.nickname, values.name);

        if (error) {
          toast.error("Hubo un problema al registrar, porfavor intenta de nuevo");
          return console.log(error);
        }

        // si no hubo error proceder a jugar        
        toast.success(`¡Te registraste exitosamente! ${values.nickname}`);
        return router.push("/dashboard");

      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const formik_signin = useFormik({
    initialValues: {
      nickname: '',
      submit: null
    },
    validationSchema: Yup.object({
      nickname: Yup
        .string()
        .max(255)
        .matches(/^[a-zA-Z0-9_]+$/, 'El nombre de usuario solo puede contener letras y espacios')
        .required('Tu nickname es requerido'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const { result, error } = await signIn(values.nickname);

        if (error) {
          toast.error("Hubo un problema al iniciar sesión, porfavor intenta de nuevo");
          return console.log(error);
        }

        // si no hubo error proceder a jugar        
        toast.success(`¡Iniciaste sesión exitosamente! ${values.nickname}`);
        return router.push("/dashboard");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const handleMethodChange = (event, value) => {
    setMethod(value);
  }


  return (
    <>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Logo Quiz
              </Typography>
            </Stack>
            <Tabs
              onChange={handleMethodChange}
              sx={{ mb: 3 }}
              value={method}
            >
              <Tab
                label="Registrarme"
                value="signup"
              />
              <Tab
                label="Iniciar Sesión"
                value="signin"
              />
            </Tabs>
            {method === 'signup' && (
              <form
                noValidate
                onSubmit={formik_signup.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik_signup.touched.nickname && formik_signup.errors.nickname)}
                    fullWidth
                    helperText={formik_signup.touched.nickname && formik_signup.errors.nickname}
                    label="Nickname"
                    name="nickname"
                    onBlur={formik_signup.handleBlur}
                    onChange={formik_signup.handleChange}
                    type="text"
                    value={formik_signup.values.nickname}
                  />
                  <TextField
                    error={!!(formik_signup.touched.name && formik_signup.errors.name)}
                    fullWidth
                    helperText={formik_signup.touched.name && formik_signup.errors.name}
                    label="Ingresa tu Nombre"
                    name="name"
                    onBlur={formik_signup.handleBlur}
                    onChange={formik_signup.handleChange}
                    type="text"
                    value={formik_signup.values.name}
                  />
                </Stack>
                {formik_signup.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik_signup.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Comenzar Quiz
                </Button>
              </form>
            )}
            {method === 'signin' && (
              <form
                noValidate
                onSubmit={formik_signin.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik_signin.touched.id && formik_signin.errors.id)}
                    fullWidth
                    helperText={formik_signin.touched.id && formik_signin.errors.id}
                    label="Nickname"
                    name="nickname"
                    onBlur={formik_signin.handleBlur}
                    onChange={formik_signin.handleChange}
                    type="text"
                    value={formik_signin.values.nickname}
                  />
                </Stack>
                {formik_signin.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik_signin.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Iniciar Sesión
                </Button>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};
