import axiosInstance from "@/plugins/interceptor";

// Get user profile
const getUserProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axiosInstance.get("user/profile", config);
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

// Get all users
const getAllUsers = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axiosInstance.get("user", config);
    return response.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const userService = {
  getUserProfile,
  getAllUsers,
};

export default userService;
