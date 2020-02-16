import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import history from "../../services/history";
import { Container, Button, Input, MessageError } from "./styles";

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Informe um e-mail válido!")
    .required("Informe seu e-mail!"),
  password: Yup.string().required("Informe sua senha!")
});

export default function SignIn() {
  async function submitForm({ email, password }) {
    const response = await api.post("/sessions", {
      email,
      password
    });

    if (response.data.error) {
      alert("email ou senha inválidos!");
      return false;
    }

    console.log(response);
    try {
      const { token } = response.data;

      localStorage.setItem("@DevSource/token", token);
      history.push("/dashboard");
    } catch (err) {
      console.log(err, " ERROR");
    }
  }

  return (
    <Container>
      <h1>DevSource</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={FormSchema}
        onSubmit={values => {
          submitForm(values);
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
            <Button type="submit" onClick={handleSubmit}>
              Entrar
            </Button>
          </>
        )}
      </Formik>
      <Link to="/sign-up">Criar conta</Link>
    </Container>
  );
}
