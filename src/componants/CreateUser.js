import { Container } from "react-bootstrap";
import "../App.css";
import { addUser } from "../rtk/Slice/Person-operation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const state = useSelector((state) => state.person);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelAdd = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: state.length + 1, name, email }));
    navigate("/");
  };

  return (
    <Container className="form vh-100">
      <div className="w-50 border bg-secondary text-white p-5">
        <h1>Add New User</h1>
        <form onSubmit={handelAdd}>
          <div className="mt-5">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="form-control p-3"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="mt-5">
            <label>Email:</label>
            <input
              type="Email"
              name="name"
              className="form-control p-3"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button
            variant="success"
            className="mt-5 m-2 w-full btn btn-Success  bg-success c-light"
            onClick={() => handelAdd()}
          >
            Create
          </button>
        </form>
      </div>
    </Container>
  );
}

export default CreateUser;
