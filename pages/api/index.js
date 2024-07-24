import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000,
  headers: {},
});

const login = async (email, password) => {
  //promise<>
  const data = await server.post("/user/login", { email, password });
  console.log(data);
};
const register = () => {};

export default { login, register };
