import axiosInstance from "@/plugins/interceptor";
import Cookies from "js-cookie";

// Register user
const register = async (userData) => {
  try {
    const response = await axiosInstance.post("auth/register", userData);
    if (response.data) {
      // set cookie
      Cookies.set("user", JSON.stringify(response.data), { expires: 30 });
    }
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

// Login user
const login = async (userData) => {
  try {
    const response = await axiosInstance.post("auth/login", userData);

    if (response.data) {
      // set cookie
      Cookies.set("user", JSON.stringify(response.data), { expires: 30 });
    }
    return response.data;
  } catch (err) {
    console.error(err);
    // reject
    return Promise.reject(err);
  }
};

// Logout user
const logout = () => {
  Cookies.remove("token");
};

// Get user profile
const getUserProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axiosInstance.get("profile", config);
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const authService = {
  register,
  logout,
  login,
  getUserProfile,
};

export default authService;
