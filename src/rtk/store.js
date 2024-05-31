import { configureStore } from "@reduxjs/toolkit";
import PersonOperation from "./Slice/Person-operation";

export const store = configureStore({
  reducer: {
    person: PersonOperation,
  },
});
