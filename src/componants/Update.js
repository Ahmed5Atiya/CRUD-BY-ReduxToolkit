import { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../rtk/Slice/Person-operation";

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.person);
  const exitUser = user.filter((el) => el.id == id);
  const { name, email } = exitUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handelEdit = (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <Container className="form vh-100">
      <div className="w-50 border bg-secondary text-white p-5">
        <h1>Add New User</h1>
        <form onSubmit={handelEdit}>
          <div className="mt-5">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="form-control p-3"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="mt-5">
            <label>Email:</label>
            <input
              value={uemail}
              type="Email"
              name="name"
              className="form-control p-3"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button
            variant="success"
            className="mt-5 m-2 w-full btn btn-Success  bg-success c-light"
            onClick={() => handelEdit()}
          >
            Edit
          </button>
        </form>
      </div>
    </Container>
  );
}

export default Update;
