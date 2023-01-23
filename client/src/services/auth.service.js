import axios from "axios";

const API_URL = "http://localhost:5000/clients/";

const register = (user) => {
  return axios.post(`${API_URL}register`, user);
};

const login = (user) => {
  return axios
    .post(`${API_URL}login`, user)
    .then((response) => {
      if (response) {
        // console.log(JSON.stringify(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  console.log('hhhhh : ' + JSON.stringify(localStorage.getItem("user")));
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
