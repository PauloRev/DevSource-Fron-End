import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Button, Input, MessageError } from "./styles";

const FormSchema = Yup.object().shape({
  email: Yup.string().required("Informe seu e-mail!"),
  password: Yup.string().required("Informe sua senha!")
});

export default function SignIn() {
  return (
    <Container>
      <h1>DevSource</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={FormSchema}
        onSubmit={values => {
          alert(`${values.email}, ${values.password}`);
        }}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <Input
              placeholder="Seu e-mail"
              type="email"
              onChange={handleChange("email")}
            />
            {errors.email && <MessageError>{errors.email}</MessageError>}
            <Input
              placeholder="Sua senha secreta"
              type="password"
              onChange={handleChange("password")}
            />
            {errors.password && <MessageError>{errors.password}</MessageError>}
            <Button onClick={handleSubmit}>Entrar</Button>
          </>
        )}
      </Formik>
      <Link to="/sign-up">Criar conta</Link>
    </Container>
  );
}
