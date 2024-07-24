import React, { useState } from "react";
import Cookies from "js-cookie";
import server from "../../pages/api/index";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const teste = await server.login(email, password);
      // const { data } = await server.post("/login", formData);
      // if (data.msg === "Autenticado com sucesso!") {
      //   Cookies.set("tokenMD", data.token, { expires: 1 });
      //   router.push("/login");
      // }
    } catch (error) {
      console.log("Falha na conexão com o server, erro: ", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ flexDirection: "column" }}
      >
        <div style={{ flexDirection: "column" }}>
          <div>
            <label htmlFor="email">Email ou Nome de Usuário </label>
          </div>
          <input
            type="text"
            id="email"
            name={"email"}
            className="input-box"
            value={formData["email"]}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>

        <div>
          <div>
            <label htmlFor="password">Senha </label>
          </div>
          <input
            type="password"
            id="senha"
            name={"password"}
            className="input-box"
            value={formData["password"]}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>
        <button type="submit" className="enviar-btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
