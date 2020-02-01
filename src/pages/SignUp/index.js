import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Button, Input, MessageError } from "./styles";

const FormSchema = Yup.object().shape({
  username: Yup.string().required("Campo nome é obrigatório!"),
  email: Yup.string()
    .email("Insira um e-mail válido!")
    .required("Campo e-mail é obrigatório!"),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres!")
    .required("Campo senha é obrigatório!")
});

export default function SignUp() {
  return (
    <Container>
      <h1>DevSource</h1>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={FormSchema}
        onSubmit={values => {
          alert(`${values.username}, ${values.email}, ${values.password}`);
        }}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <Input
              placeholder="Seu nome de usuário do Github"
              type="text"
              onChange={handleChange("username")}
            />
            {errors.username && <MessageError>{errors.username}</MessageError>}
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
            <Button onClick={handleSubmit}>Cadastrar-se</Button>
          </>
        )}
      </Formik>
      <Link to="/sign-in">Já tenho uma conta</Link>
    </Container>
  );
}
