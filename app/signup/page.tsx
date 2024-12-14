"use client";

import React, { useState } from "react";
import { Box, Button, Card, CardContent, TextField, Typography, Link } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

// Validation schema
const validationSchema = Yup.object().shape({
  business_id: Yup.number().required("Business Code Required").test(
    "is-valid-business-id", 
    "Enter valid Business ID", 
    value => value > 0 // Custom validation: Ensure business_id is not 0
  ),
  first_name: Yup.string().required('Name is required'),
  last_name: Yup.string().required('Surname is required'),
  job_title: Yup.string().required('Job Title is required'),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  password2: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Confirm Password is required'),
});

export default function LoginPage() {
  const [business_id, setBusinessID] = useState(0);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [job_title, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = async (values: { business_id: number; email: string; password: string, password2: string, first_name: string, last_name: string, job_title: string }) => {
    console.log("User Details:");
    console.log("Business ID:", values.business_id);
    console.log("First Name:", values.first_name);
    console.log("Last Name:", values.last_name);
    console.log("Job Title:", values.job_title);
    console.log("Email:", values.email);
    console.log("Password:", values.password);

    setBusinessID(values.business_id)
    setFirstName(values.first_name);
    setLastName(values.last_name);
    setJobTitle(values.job_title);
    setEmail(values.email);
    setPassword(values.password)
    
    // if(values.password === values.password2) {
    //     setPassword(values.password);
    // } else {
    //     setError("Passwords must match")
    // }


    // // Add further login logic here, like API call
    // try {
    //   // Clear previous errors
    //   setError('');

    //   // Make the API call
    //   const response = await axios.post('/api/signup', { first_name, last_name, job_title, email, password });

    //   if (response.status === 200) 
    //     console.log('Login successful:', response.data);
    //     // Redirect or handle success here
    // } catch (err: any) {
    //   // Handle error
    //   if (err.response) {
    //     setError(err.response.data.message || 'Sign Up failed');
    //   } else {
    //     setError('An error occurred. Please try again later.');
    //   }
    // }

  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Card sx={{ width: {sm: 400, lg: 500}, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
            Create Account
          </Typography>
          <Formik
            initialValues={{ business_id: 0, first_name: "", last_name: "", job_title: "", email: "", password: "", password2: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSignin}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Field
                  as={TextField}
                  name="business_id"
                  label="Business ID"
                  type="number"
                  fullWidth
                  helperText={<ErrorMessage name="business_id" />}
                  error={Boolean(<ErrorMessage name="business_id" />)}
                />
                <Field
                  as={TextField}
                  name="first_name"
                  label="First Name"
                  type="text"
                  fullWidth
                  helperText={<ErrorMessage name="first_name" />}
                  error={Boolean(<ErrorMessage name="first_name" />)}
                />
                <Field
                  as={TextField}
                  name="last_name"
                  label="Last Name"
                  type="text"
                  fullWidth
                  helperText={<ErrorMessage name="last_name" />}
                  error={Boolean(<ErrorMessage name="last_name" />)}
                />
                <Field
                  as={TextField}
                  name="job_title"
                  label="Job Title"
                  type="text"
                  fullWidth
                  helperText={<ErrorMessage name="job_title" />}
                  error={Boolean(<ErrorMessage name="job_title" />)}
                />
                <Field
                  as={TextField}
                  name="email"
                  label="Company Email Address"
                  type="email"
                  fullWidth
                  helperText={<ErrorMessage name="email" />}
                  error={Boolean(<ErrorMessage name="email" />)}
                />
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  helperText={<ErrorMessage name="password" />}
                  error={Boolean(<ErrorMessage name="password" />)}
                />
                <Field
                  as={TextField}
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  helperText={<ErrorMessage name="password2" />}
                  error={Boolean(<ErrorMessage name="password2" />)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Sign Up
                </Button>
              </Box>
            </Form>
            
            )}
          </Formik>
          <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link href="/login" color="primary">
              Login
            </Link>
          </Typography>
          {error && <Typography color='error' fontWeight='bold' textTransform='capitalize' textAlign={'center'}>{error}</Typography>}
        </CardContent>
      </Card>
    </Box>
  );
}
