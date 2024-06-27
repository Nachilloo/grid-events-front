import api from "./config.js";

const updateOneUser = async (id, dataForm) => {
  try {
    const { data } = await api.put(
      `user/${id}`, 
      dataForm, 
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem("token"),
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

const deleteOneUser = async (id, dataForm) => {
  try {
    const { data } = await api.delete(
     `user/${id}`, 
      dataForm, 
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem("token"),
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export {
  updateOneUser,
  deleteOneUser
}