// src/components/pages/LoginPage.jsx

import React, { useState } from "react";
import { Button } from "../styles/GlobalStyles"; // Ajuste o caminho se necessário
import { LoginContainer, Form, Input, ErrorMessage } from "../styles/LoginStyles";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Lógica de login
    if (username === "admin" && password === "1234") {
      alert("Login bem-sucedido");
    } else {
      setErrorMessage("Usuário ou senha incorretos");
    }
  };

  return (
    <LoginContainer>
      <Form>
        <h2>Login</h2>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button onClick={handleLogin}>Entrar</Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage;
