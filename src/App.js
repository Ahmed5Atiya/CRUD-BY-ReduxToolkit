import { Route, Routes } from "react-router-dom";
// import NavBar from "./componants/NavBar";
import Home from "./componants/Home";
import CreateUser from "./componants/CreateUser";
import Update from "./componants/Update";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}
