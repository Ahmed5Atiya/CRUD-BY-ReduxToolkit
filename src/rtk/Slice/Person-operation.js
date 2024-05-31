import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../componants/DataUser";
export const PersonOperation = createSlice({
  initialState: userList,
  name: "PersonOperation",
  reducers: {
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
    editUser: (state, action) => {
      const { name, email, id } = action.payload;
      const u = state.find((el) => el.id == id);
      if (u) {
        u.email = email;
        u.id = id;
        u.name = name;
      }
    },
    addUser: (state, action) => {
      // console.log(action.payload);
      state.push(action.payload);
    },
    clearAll: (state, action) => {
      return [];
    },
  },
});

export const { deleteUser, editUser, addUser, clearAll } =
  PersonOperation.actions;
export default PersonOperation.reducer;
