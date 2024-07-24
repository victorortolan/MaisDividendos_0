import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Image from "next/image";
const Home = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = () => {
    setCurrentForm(currentForm === "login" ? "register" : "login");
  };

  return (
    <div>
      <div>
        <Image src={"/logo.jpeg"} alt="logo" height={400} width={400}></Image>
      </div>
      {currentForm === "login" ? (
        <div>
          <LoginForm />
        </div>
      ) : (
        <div>
          <RegisterForm />
        </div>
      )}
      <button
        onClick={toggleForm}
        className={currentForm === "register" ? "login-btn" : "cadastro-btn"}
      >
        {currentForm === "register" ? " ou Faça Login" : "Cadastre-se Aqui"}
      </button>
    </div>
  );
};

export default Home;
