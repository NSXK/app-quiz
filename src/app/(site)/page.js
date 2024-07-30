"use client";

import { useCallback, useEffect, useState } from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
// import { useAuth } from 'src/hooks/use-auth';
// import { Layout as AuthLayout } from 'src/layouts/auth/layout';

const departments = [
  { value: "Atlántida", label: "Atlántida" },
  { value: "Choluteca", label: "Choluteca" },
  { value: "Colón", label: "Colón" },
  { value: "Comayagua", label: "Comayagua" },
  { value: "Copán", label: "Copán" },
  { value: "Cortés", label: "Cortés" },
  { value: "El Paraíso", label: "El Paraíso" },
  { value: "Francisco Morazán", label: "Francisco Morazán" },
  { value: "Gracias a Dios", label: "Gracias a Dios" },
  { value: "Intibucá", label: "Intibucá" },
  { value: "Islas de la Bahía", label: "Islas de la Bahía" },
  { value: "La Paz", label: "La Paz" },
  { value: "Lempira", label: "Lempira" },
  { value: "Ocotepeque", label: "Ocotepeque" },
  { value: "Olancho", label: "Olancho" },
  { value: "Santa Bárbara", label: "Santa Bárbara" },
  { value: "Valle", label: "Valle" },
  { value: "Yoro", label: "Yoro" },
];

const size = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "2XL", label: "2XL" },
];

export default function Page () {
  // const router = useRouter();
  // const auth = useAuth();
  const [method, setMethod] = useState('email');
  const formik = useFormik({
    initialValues: {
      // email: '',
      id: '',
      username: '',
      store: '',
      // password: '',
      infoDepartment: 'Atlántida',
      infoSize: 'xs',
      // email: 'jmendozacastejon@gmail.com',
      // password: 'ccc12345',
      submit: null
    },
    validationSchema: Yup.object({
      // email: Yup
      //   .string()
      //   .email('Must be a valid email')
      //   .max(255)
      //   .required('Email is required'),
      id: Yup
        .string()
        .matches(/^[0-9]+$/, 'El número de DNI solo puede contener números sin guiones')
        .min(13, 'Ingresa un número de identidad válido')
        .max(13, 'Ingresa un número de identidad válido')
        .required('Tu ID es requerido'),
      username: Yup
        .string()
        .max(255)
        // .matches(/^[a-zA-Z\s]+$/, 'Este campo no puede llevar número o caracteres no válidos')   
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚÑñ\s]+$/, 'El nombre de usuario solo puede contener letras y espacios')
        .required('Tu nombre es requerido'),
      store: Yup
      .string()
      .required('El nombre de tienda es requerido'),
      // password: Yup
      //   .string()
      //   .max(255)
      //   .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth.signIn(values.email, values.password);
        // await auth.signUp(values.id, values.username, values.infoDepartment, values.infoSize, values.store);
        // router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const formik_login = useFormik({
    initialValues: {
      id: '',     
      submit: null
    },
    validationSchema: Yup.object({     
      id: Yup
        .string()
        .matches(/^[0-9]+$/, 'El número de DNI solo puede contener números sin guiones')
        .min(13, 'Ingresa un número de identidad válido')
        .max(13, 'Ingresa un número de identidad válido')
        .required('Tu ID es requerido'),              
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth.signIn(values.email, values.password);
        // await auth.signIn(values.id);
        // router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    },
    []
  );

  // useEffect(() => {
  //   if (auth.isAuthenticated) {
  //     router.push('/');
  //   }
  // }, [])


  // const handleSkip = useCallback(
  //   () => {
  //     auth.skip();
  //     router.push('/');
  //   },
  //   [auth, router]
  // );

  return (
    <>
      {/* <Head>
        <title>
          Inicio | Indumuebles Quiz
        </title>
      </Head> */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
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
                Indumuebles Quiz
              </Typography>
              {/* <Typography
                color="text.secondary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography> */}
            </Stack>
            <Tabs
              onChange={handleMethodChange}
              sx={{ mb: 3 }}
              value={method}
            >
              <Tab
                label="Registrarme"
                value="email"
              />
              <Tab
                label="Mis Resultados"
                value="phoneNumber"
              />
            </Tabs>
            {method === 'email' && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  {/* <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  /> */}
                  <TextField
                    error={!!(formik.touched.id && formik.errors.id)}
                    fullWidth
                    helperText={formik.touched.id && formik.errors.id}
                    label="Cédula de Identidad"
                    name="id"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.id}
                  />
                  <TextField
                    error={!!(formik.touched.username && formik.errors.username)}
                    fullWidth
                    helperText={formik.touched.username && formik.errors.username}
                    label="Nombre Completo"
                    name="username"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.username}
                  />
                  <TextField
                    error={!!(formik.touched.store && formik.errors.store)}
                    fullWidth
                    helperText={formik.touched.store && formik.errors.store}
                    label="Nombre de Tienda"
                    name="store"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.store}
                  />
                  <TextField
                    fullWidth
                    label="Departamento"
                    name="infoDepartment"
                    error={!!(formik.touched.infoDepartment && formik.errors.infoDepartment)}
                    helperText={
                      (formik.touched.infoDepartment && formik.errors.infoDepartment) ||
                      'Selecciona tu departamento'
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.infoDepartment}
                    select
                    SelectProps={{ native: true }}
                  >
                    {departments.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    label="Talla"
                    name="infoSize"
                    error={!!(formik.touched.infoSize && formik.errors.infoSize)}
                    helperText={
                      (formik.touched.infoSize && formik.errors.infoSize) ||
                      'Selecciona tu talla de camisa'
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.infoSize}
                    select
                    SelectProps={{ native: true }}
                  >
                    {size.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        // value={option.value.toLowerCase()}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Stack>
                {/* <FormHelperText sx={{ mt: 1 }}>
                  Optionally you can skip.
                </FormHelperText> */}
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
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
                {/* <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={handleSkip}
                >
                  Skip authentication
                </Button> */}
                {/* <Alert
                  color="primary"
                  severity="info"
                  sx={{ mt: 3 }}
                >
                  <div>
                    You can use <b>demo@devias.io</b> and password <b>Password123!</b>
                  </div>
                </Alert> */}
              </form>
            )}
            {method === 'phoneNumber' && (
              <form
                noValidate
                onSubmit={formik_login.handleSubmit}
              >
                <Stack spacing={3}>                 
                  <TextField
                    error={!!(formik_login.touched.id && formik_login.errors.id)}
                    fullWidth
                    helperText={formik_login.touched.id && formik_login.errors.id}
                    label="ID"
                    name="id"
                    onBlur={formik_login.handleBlur}
                    onChange={formik_login.handleChange}
                    type="text"
                    value={formik_login.values.id}
                  />                  
                </Stack>
                {formik_login.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik_login.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Ver mis Resultados
                </Button>                
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

// Page.getLayout = (page) => (
//   <AuthLayout>
//     {page}
//   </AuthLayout>
// );

// export default Page;
