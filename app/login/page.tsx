"use client";

import React from "react";
import { Box, Button, Card, CardContent, TextField, Typography, Link } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginPage() {
  const handleLogin = (values: { email: string; password: string }) => {
    console.log("User Login Details:");
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    // Add further login logic here, like API call
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Card sx={{ maxWidth: 400, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
            Login
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
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
                    name="email"
                    label="Company Email Address"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    required
                    helperText={<ErrorMessage name="email" />}
                    error={Boolean(<ErrorMessage name="email" />)}
                  />
                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    required
                    helperText={<ErrorMessage name="password" />}
                    error={Boolean(<ErrorMessage name="password" />)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Login
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <Link href="/signup" color="primary">
              Sign Up
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
